const menuTitle = document.querySelector('.menu__title');

function toggleMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.toggle(activeClass);
  }
};

function hideMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.remove(activeClass);
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
