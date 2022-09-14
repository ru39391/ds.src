export class SearchPanel {
  constructor(searchPanel, {
    searchPanelActiveClass,
    searchPanelVisibleClass,
    searchPanelHolderSel,
    searchPanelResultSel,
    searchPanelInputSel,
    searchPanelInputActiveClass,
    searchBtnShowSel,
    searchBtnHideSel
  }) {
    this._searchPanel = searchPanel;
    this._searchPanelActiveClass = searchPanelActiveClass;
    this._searchPanelVisibleClass = searchPanelVisibleClass;
    this._searchPanelHolder = document.querySelector(searchPanelHolderSel);
    this._searchPanelResult = this._searchPanelHolder.querySelector(searchPanelResultSel);
    this._searchPanelInput = this._searchPanelHolder.querySelector(searchPanelInputSel);
    this.searchPanelInputActive = searchPanelInputActiveClass;
    this._searchBtnShow = this._searchPanelHolder.querySelector(searchBtnShowSel);
    this._searchBtnHide = this._searchPanelHolder.querySelector(searchBtnHideSel);
  }

  _hideResult() {
    this._searchPanelHolder.classList.remove(this.searchPanelInputActive);
    this._searchPanelResult.style = null;
  }

  setEventListeners() {
    this._searchPanelInput.addEventListener('focus', () => {
      this._searchPanelHolder.classList.add(this._searchPanelActiveClass);
    });

    this._searchPanelInput.addEventListener('blur', () => {
      this._searchPanelHolder.classList.remove(this._searchPanelActiveClass);
      this._searchPanelInput.value = '';
      this._hideResult();
    });

    this._searchPanelInput.addEventListener('input', e => {
      if(e.target.value.length > 3) {
        this._searchPanelHolder.classList.add(this.searchPanelInputActive);
        this._searchPanelResult.style.display = 'block';
      } else {
        this._hideResult();
      }
    });

    this._searchBtnShow.addEventListener('click', () => {
      this._searchPanel.classList.add(this._searchPanelVisibleClass);
    });

    this._searchBtnHide.addEventListener('click', () => {
      this._searchPanel.classList.remove(this._searchPanelVisibleClass);
    });

    this._searchPanel.addEventListener('click', e => {
      if(e.target == e.currentTarget) {
        this._searchPanel.classList.remove(this._searchPanelVisibleClass);
      }
    });
  }
}
