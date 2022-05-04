const popups = document.querySelectorAll('.popup');
const popupCloseBtns = document.querySelectorAll('.popup__close');
const popupCartToggler = document.querySelector('.header__btn_type_cart-holder');

function showPopup(popupID) {
  const popup = document.querySelector(`${popupID}`);
  popup.classList.toggle('d-block');
};

function closePopup(popupCloseElem) {
  const popup = popupCloseElem.closest('.popup');
  const headerBtn = popup.parentNode.querySelector('.header__btn');
  popup.classList.remove('d-block');

  if(headerBtn && headerBtn.classList.contains('header__btn_active')) {
    headerBtn.classList.remove('header__btn_active');
  };
};

function closePopupInTime(popupElem) {
  if(popupElem.classList.contains('d-block')) {
    popupElem.classList.remove('d-block');
  };
};

function toggleHeaderBtnClass(toggler) {
  toggler.classList.toggle('header__btn_active');
  if(toggler.classList.contains('header__btn_active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style = null;
  }
};

popups.forEach(popupsEl => {
  //setTimeout(() => closePopupInTime(popupsEl), 2500);
});

popupCloseBtns.forEach(popupCloseBtnsEl => {
  popupCloseBtnsEl.addEventListener('click', e => {
    e.preventDefault();
    closePopup(e.target);
  });
});

if(popupCartToggler) {
  popupCartToggler.addEventListener('click', e => {
    e.preventDefault();
    toggleHeaderBtnClass(e.target);
    showPopup(e.target.getAttribute('data-target'));
  });
};
