const topPanel = document.querySelector('.top-panel');
const menuSel = '.navbar';
const menuTitle = document.querySelector('.navbar__title');
const menuTitleActiveClass = 'navbar__title_active';

function hideMenu(togglerEl, activeClass) {
  if(togglerEl) {
    togglerEl.classList.remove(activeClass);
    topPanel.style = null;
  }
};

function showMenu(togglerEl, activeClass) {
  if(togglerEl) {
    togglerEl.classList.add(activeClass);
    topPanel.style.zIndex = 1040;
  }
};

function toggleMenu(togglerEl, activeClass) {
  if(togglerEl.classList.contains(activeClass)) {
    hideMenu(togglerEl, activeClass);
  } else {
    showMenu(togglerEl, activeClass);
  }
};

menuTitle.addEventListener('click', e => {
  toggleMenu(menuTitle, menuTitleActiveClass);
});

document.body.addEventListener('click', e => {
  console.log(!e.target.closest(menuSel), menuTitle.classList.contains(menuTitleActiveClass));
  if(!e.target.closest(menuSel) && menuTitle.classList.contains(menuTitleActiveClass)) {
    hideMenu(menuTitle, menuTitleActiveClass);
  }
});
