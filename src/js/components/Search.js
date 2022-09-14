export class Search {
  constructor(searchInput, {
    searchHolderSel,
    searchResultSel,
    searchActiveClass,
    searchInputActiveClass,
  }) {
    this._searchInput = searchInput;
    this._searchHolder = this._searchInput.closest(searchHolderSel);
    this._searchResult = this._searchHolder.querySelector(searchResultSel);
    this._searchActiveClass = searchActiveClass;
    this._searchInputActiveClass = searchInputActiveClass;
  }

  _hideResult() {
    this._searchHolder.classList.remove(this._searchInputActiveClass);
    this._searchResult.style = null;
  }

  setEventListeners() {
    this._searchInput.addEventListener('focus', () => {
      this._searchHolder.classList.add(this._searchActiveClass);
    });

    this._searchInput.addEventListener('blur', () => {
      this._searchHolder.classList.remove(this._searchActiveClass);
      this._searchInput.value = '';
      this._hideResult();
    });

    this._searchInput.addEventListener('input', e => {
      if(e.target.value.length > 3) {
        this._searchHolder.classList.add(this._searchInputActiveClass);
        this._searchResult.style.display = 'block';
      } else {
        this._hideResult();
      }
    });
  }
}
