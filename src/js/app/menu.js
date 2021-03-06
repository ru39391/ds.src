const headerTop = document.querySelector('.header_top');
const menuTitle = document.querySelector('.menu__title');

function toggleMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.toggle(activeClass);
    headerTop.style.zIndex = 1040;
  }
};

function hideMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.remove(activeClass);
    headerTop.style = null;
  }
};

menuTitle.addEventListener('click', e => {
  toggleMenu(menuTitle, 'menu__title_active');
});

document.body.addEventListener('click', e => {
  if(!e.target.closest('.menu') && menuTitle.classList.contains('menu__title_active')) {
    hideMenu(menuTitle, 'menu__title_active');
  }
});
