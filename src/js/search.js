import { SearchPanel } from './components/SearchPanel';
import { Search } from './components/Search';

const searchPanelElem = document.querySelector('.search-panel');
const searchPanelConfig = {
  searchPanelActiveClass: 'search-panel_active',
  searchBtnShowSel: '.header__navbar-item_toggler_search',
  searchBtnHideSel: '.panel-close-btn'
};
if(searchPanelElem) {
  const searchPanel = new SearchPanel(searchPanelElem, searchPanelConfig);
  searchPanel.setEventListeners();
}

const searchInputsArr = Array.from(document.querySelectorAll('.search__field'));
const searchConfig = {
  searchHolderSel: '.search-holder',
  searchResultSel: '.search-dropdown',
  searchActiveClass: 'search-holder_focused',
  searchInputActiveClass: 'search-holder_active'
};
searchInputsArr.forEach(searchInputsArrEl => {
  const search = new Search(searchInputsArrEl, searchConfig);
  search.setEventListeners();
});
