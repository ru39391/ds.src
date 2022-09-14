export class SearchPanel {
  constructor(searchPanel, {
    searchPanelActiveClass,
    searchBtnShowSel,
    searchBtnHideSel
  }) {
    this._searchPanel = searchPanel;
    this._searchPanelActiveClass = searchPanelActiveClass;
    this._searchBtnShow = document.querySelector(searchBtnShowSel);
    this._searchBtnHide = this._searchPanel.querySelector(searchBtnHideSel);
  }

  _closePanel() {
    this._searchPanel.classList.remove(this._searchPanelActiveClass);
    document.body.style = null;
  }

  setEventListeners() {
    this._searchBtnShow.addEventListener('click', () => {
      this._searchPanel.classList.add(this._searchPanelActiveClass);
      document.body.style.overflow = 'hidden';
    });

    this._searchBtnHide.addEventListener('click', () => {
      this._closePanel();
    });

    this._searchPanel.addEventListener('click', e => {
      if(e.target == e.currentTarget) {
        this._closePanel();
      }
    });
  }
}
