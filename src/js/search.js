const searchField = document.querySelector('.header__search-field');
const searchFieldColParent = document.querySelector('.header__col_search_wide').parentNode;
const searchBtn = document.querySelector('.header__nav-item_search');
const searchBtnClose = document.querySelector('.header__search-btn_close');

function addClass(elem, selector) {
  elem.classList.add(selector);
}

function removeClass(elem, selector) {
  elem.classList.remove(selector);
}

function toggleClass(elem, selector) {
  elem.classList.toggle(selector);
}

if(searchField) {
  searchField.addEventListener('focus', e => {
    addClass(searchFieldColParent, 'header__search-holder');
  });
  searchField.addEventListener('blur', e => {
    removeClass(searchFieldColParent, 'header__search-holder');
    if(searchFieldColParent.classList.contains('header__search-holder_active')) {
      removeClass(searchFieldColParent, 'header__search-holder_active');
    }
  });
  searchField.addEventListener('input', e => {
    if(e.target.value.length !== 0) {
      addClass(searchFieldColParent, 'header__search-holder_active');
    } else {
      removeClass(searchFieldColParent, 'header__search-holder_active');
    }
    /* здесь ajax-запрос */
  });
  searchBtn.addEventListener('click', e => {
    e.preventDefault();
    toggleClass(searchFieldColParent, 'header__search-holder');
  });
  searchBtnClose.addEventListener('click', e => {
    e.preventDefault();
    removeClass(searchFieldColParent, 'header__search-holder');
  });
}
