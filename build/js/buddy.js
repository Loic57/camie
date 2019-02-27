"use strict";
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /********** component form / input animation **********/
  var inputs = document.querySelectorAll('.input-animation input, .input-animation textarea'),
      textarea = document.querySelectorAll('.input-animation textarea');

  var focusInAnimation = function focusInAnimation(event) {
    event.currentTarget.parentNode.classList.add('active');
  };

  var focusOutAnimation = function focusOutAnimation(event) {
    if (event.currentTarget.value == "") event.currentTarget.parentNode.classList.remove('active');
  };

  var resize = function resize(event) {
    event.currentTarget.style.height = "1px";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  };

  for (var i = 0, x = inputs.length; i < x; i++) {
    inputs[i].addEventListener('focusin', focusInAnimation);
    inputs[i].addEventListener('change', focusInAnimation);
    inputs[i].addEventListener('keyup', focusInAnimation);
    inputs[i].addEventListener('blur', focusInAnimation);
    inputs[i].addEventListener('input', focusInAnimation);
    inputs[i].addEventListener('focusout', focusOutAnimation);

    if (inputs[i].value != "" || inputs[i].getAttribute('placeholder') != "") {
      inputs[i].parentNode.classList.add('active');
    }
  }

  for (var _i = 0, _x = textarea.length; _i < _x; _i++) {
    textarea[_i].addEventListener('keyup', resize);
  }

  /********** component form / input animation **********/

  var target = document.querySelectorAll('.btn-icon[data-modal], .box-user-2__left[data-modal], button[data-modal]');
  var sections = document.querySelectorAll('section');
  var closeModal = document.querySelectorAll('[data-close="close"]');
  var body = document.getElementsByTagName('body')[0];
  var overlayClose = document.querySelectorAll('.overlay .overlay__close');

  for (var _i2 = 0; _i2 < target.length; _i2++) {
    target[_i2].addEventListener('click', function () {
      var dataModal = event.currentTarget.getAttribute('data-modal');

      for (var _i3 = 0, _x2 = sections.length; _i3 < _x2; _i3++) {
        if (sections[_i3].getAttribute('data-modal') == dataModal) {
          if (sections[_i3].classList.contains('overlay--open')) {
            body.classList.remove('overlay--open');
            var j = 0;
            while (j < sections.length) {
              sections[j].classList.remove('overlay--open');j++;
            }
          } else {
            body.classList.add('overlay--open');
            sections[_i3].classList.add('overlay--open');
          }
        }
      }
    });
  }

  for (var j = 0; j < closeModal.length; j++) {
    closeModal[j].addEventListener('click', function () {
      for (var _i4 = 0, _x3 = sections.length; _i4 < _x3; _i4++) {
        body.classList.remove('overlay--open');
        sections[_i4].classList.remove('overlay--open');
      }
    });
  }

  for (var _j = 0; _j < overlayClose.length; _j++) {
    overlayClose[_j].addEventListener('click', function () {
      for (var _i5 = 0, _x4 = sections.length; _i5 < _x4; _i5++) {
        body.classList.remove('overlay--open');
        sections[_i5].classList.remove('overlay--open');
      }
    });
  }
}, false);
//# sourceMappingURL=buddy.js.map
