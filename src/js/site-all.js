document.addEventListener('DOMContentLoaded', function() {


  /********** component form / input animation **********/
  const inputs = document.querySelectorAll('.input-animation input, .input-animation textarea'),
        textarea = document.querySelectorAll('.input-animation textarea');

  const focusInAnimation = event => {
    event.currentTarget.parentNode.classList.add('active');
  };

  const focusOutAnimation = event => {
    if(event.currentTarget.value == "")
    event.currentTarget.parentNode.classList.remove('active');
  };

  const resize = event => {
    event.currentTarget.style.height = "1px";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  };

  for (let i=0, x=inputs.length; i<x; i++) {
    inputs[i].addEventListener('focusin', focusInAnimation);
    inputs[i].addEventListener('change', focusInAnimation);
    inputs[i].addEventListener('keyup', focusInAnimation);
    inputs[i].addEventListener('blur', focusInAnimation);
    inputs[i].addEventListener('input', focusInAnimation);
    inputs[i].addEventListener('focusout', focusOutAnimation);

    if(inputs[i].value != "" || inputs[i].getAttribute('placeholder') != "") {
      inputs[i].parentNode.classList.add('active');
    }
  }

  for (let i=0, x=textarea.length; i<x; i++) {
    textarea[i].addEventListener('keyup', resize);
  }

  /********** component form / input animation **********/


  const target       = document.querySelectorAll('.btn-icon[data-modal], .box-user-2__left[data-modal], button[data-modal]');
  const sections     = document.querySelectorAll('section');
  const closeModal   = document.querySelectorAll('[data-close="close"]');
  const body         = document.getElementsByTagName('body')[0];
  const overlayClose = document.querySelectorAll('.overlay .overlay__close');



  for(let i=0;i<target.length;i++) {
    target[i].addEventListener('click', () => {
      const dataModal = event.currentTarget.getAttribute('data-modal');

      for (let i=0, x=sections.length; i < x; i++) {
        if(sections[i].getAttribute('data-modal') == dataModal) {
          if(sections[i].classList.contains('overlay--open')) {
            body.classList.remove('overlay--open');
            let j=0;
            while(j<sections.length) {sections[j].classList.remove('overlay--open');j++}
          }
          else {
            body.classList.add('overlay--open');
            sections[i].classList.add('overlay--open');
          }
        }
      }
    });
  }

  for(let j=0;j<closeModal.length;j++) {
    closeModal[j].addEventListener('click', () => {
      for (let i=0, x=sections.length; i < x; i++) {
        body.classList.remove('overlay--open');
        sections[i].classList.remove('overlay--open');
      }
    });
  }

  for(let j=0;j<overlayClose.length;j++) {
    overlayClose[j].addEventListener('click', () => {
      for (let i=0, x=sections.length; i < x; i++) {
        body.classList.remove('overlay--open');
        sections[i].classList.remove('overlay--open');
      }
    });
  }





}, false);
