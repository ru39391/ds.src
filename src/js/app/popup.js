function closePopup(popupCloseElem) {
  const popup = popupCloseElem.closest('.popup');
  popup.classList.remove('d-block');
};

const popupCloseBtns = document.querySelectorAll('.popup__close');
popupCloseBtns.forEach(popupCloseBtnsEl => {
  popupCloseBtnsEl.addEventListener('click', e => {
    closePopup(e.target);
  });
});

/*
function showPopup(popupID,popupHolder) {
  if(document.querySelector(`${popupID}`)) {
    const popup = document.querySelector(`${popupID}`).cloneNode(true);
    const popupCloseBtn = popup.querySelector('.popup__close');
    const popupParent = document.querySelector(`[data-target="${popupID}"]`);

    const popupParentTop = popupParent.getBoundingClientRect().top;
    const popupParentLeft = popupParent.getBoundingClientRect().left;
    const popupParentWidth = popupParent.getBoundingClientRect().width;
    const popupParentHeight = popupParent.getBoundingClientRect().height;

    popup.style.top = `${popupParentHeight}px`;
    popup.style.left = `${popupParentLeft + popupParentWidth/2}px`;
    popup.style.display = 'block';
    popupHolder.append(popup);
    closePopup(popupCloseBtn)
  };;
};

const popupMasters = document.querySelectorAll('.popup-target');
popupMasters.forEach(popupMastersEl => {
  const popupTarget = popupMastersEl.getAttribute('data-target');
  const popupHolder = document.querySelector('.header__wrapper');
  showPopup(popupTarget,popupHolder);
});
*/
