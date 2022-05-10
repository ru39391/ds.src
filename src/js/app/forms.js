import classie from 'desandro-classie';
import Inputmask from 'inputmask';

document.querySelectorAll('.input-email').forEach(field => {
	Inputmask({
		alias: 'email',
		showMaskOnHover: false,
	}).mask(field);
});

document.querySelectorAll('.input-phone').forEach(field => {
	Inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false,
	}).mask(field);
});

const onInputFocus = (e) => {
  classie.add(e.target.parentNode, 'active');
}

const onInputBlur = (e) => {
  if(e.target.value.trim() === '') {
    classie.remove(e.target.parentNode, 'active');
  }
};

[].slice.call(document.querySelectorAll('.form__field')).forEach((input) => {
  if(input.value.trim() !== '') {
    classie.add(input, 'active');
  }

  input.addEventListener('focus', onInputFocus);
  input.addEventListener('blur', onInputBlur);
});

/* selecter */
if(document.querySelector('.form__select-options')) {
  $('.form__select-options').dropdown();
}

document.querySelectorAll('.form__section-toggler').forEach(formSecToggler => {
  formSecToggler.addEventListener('click', (e) => {
    e.target.closest('.form__section').classList.add('active');
  });
});

let formPwdField;
document.querySelectorAll('.form__toggler_pwd').forEach(formPwdToggler => {
  formPwdToggler.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    formPwdField = e.target.closest('.form__item').querySelector('.form__field');
    if(formPwdField.type == 'password') {
      formPwdField.type = 'text';
    } else {
      formPwdField.type = 'password';
    }
  });
});

/* form toggler */
document.querySelectorAll('[data-toggle="list"]').forEach(listToggler => {
  listToggler.addEventListener('click', (e) => {
    let target = document.querySelector(e.target.getAttribute('data-target'));
    if (!target.style.height) {
      target.style.height = 'auto';
      e.target.classList.add('checked');
    } else {
      target.style.height = null;
      e.target.classList.remove('checked');
    }
  });
});

/* custom service select */
const serviceSelect = document.querySelector('.custom-select__service');
if (serviceSelect) {
  const serviceCaption = document.querySelector('.modal-header__service-title');
  const serviceBtn = document.querySelector('.btn_toggler-service');
  const serviceIcon = serviceBtn.querySelector('.btn__icon');
  serviceSelect.addEventListener('change', e => {
    if(e.target.selectedIndex !== 0) {
      serviceCaption.textContent = e.target.value.toLowerCase();
      serviceBtn.disabled = false;
      serviceBtn.classList.remove('color-theme-disabled');
      serviceIcon.classList.remove('color-theme-disabled');
      serviceIcon.classList.add('color-theme-brand');
    }
  });
}
