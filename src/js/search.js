import { SearchPanel } from './components/SearchPanel';

const searchPanelElem = document.querySelector('.search-panel');
const searchPanelConfig = {
  searchPanelActiveClass: 'search-panel-active',
  searchPanelVisibleClass: 'search-panel_active',
  searchPanelHolderSel: '.header__col_side_right',
  searchPanelResultSel: '.search-panel__dropdown-holder',
  searchPanelInputSel: '.search__field',
  searchPanelInputActiveClass: 'search-panel-focus',
  searchBtnShowSel: '.header__navbar-item_toggler_search',
  searchBtnHideSel: '.panel-close-btn'
};

if(searchPanelElem) {
  const searchPanel = new SearchPanel(searchPanelElem, searchPanelConfig);
  searchPanel.setEventListeners();
}
