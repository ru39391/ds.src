const menuTitle = document.querySelector('.menu__title');

function toggleMenu(togglerEl,activeClass) {
  if(togglerEl) {
    togglerEl.classList.toggle(`${activeClass}`);
  }
};

menuTitle.addEventListener('click', e => {
  toggleMenu(menuTitle, 'menu__title_active');
});
