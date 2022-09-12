const topPanel = document.querySelector('.top-panel');
const menuSel = '.navbar';
const menuTitle = document.querySelector('.navbar__title');
const menuTitleActiveClass = 'navbar__title_active';

function toggleMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.toggle(activeClass);
    topPanel.style.zIndex = 1040;
  }
};

function hideMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.remove(activeClass);
    topPanel.style = null;
  }
};

menuTitle.addEventListener('click', e => {
  toggleMenu(menuTitle, menuTitleActiveClass);
});

document.body.addEventListener('click', e => {
  if(!e.target.closest(menuSel) && menuTitle.classList.contains(menuTitleActiveClass)) {
    hideMenu(menuTitle, menuTitleActiveClass);
  }
});
