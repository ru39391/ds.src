export class Popup {
  constructor(popupToggler, {
    popupHolderSel,
    popupHolderActive,
    popupCloseBtnSel
  }) {
    this._popupToggler = popupToggler;
    this._popup = this._popupToggler.querySelector(this._popupToggler.getAttribute('data-target'));
    this._popupHolder = this._popup.closest(popupHolderSel);
    this._popupHolderActive = popupHolderActive;
    this._popupCloseBtn = this._popup.querySelector(popupCloseBtnSel);
  }

  _closePopup() {
    this._popupHolder.classList.remove(this._popupHolderActive);
    document.body.style = null;
  }

  setEventListeners() {
    this._popupToggler.addEventListener('click', e => {
      e.preventDefault();
      if(e.target == e.currentTarget) {
        this._popupHolder.classList.add(this._popupHolderActive);
        document.body.style.overflow = 'hidden';
      }
    });

    this._popupCloseBtn.addEventListener('click', e => {
      e.preventDefault();
      this._closePopup();
    });

    this._popupHolder.addEventListener('click', e => {
      if(e.target == e.currentTarget) {
        this._closePopup();
      }
    });
  }
}
