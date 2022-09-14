const changeHeader = (() => {
  const header = document.querySelector('.header');
  const scrollHeight = 200;
  let scrolled = false;

  function init() {
    window.addEventListener('scroll', () => {
      if(!scrolled) {
        scrolled = true;
        scrollPage();
      }
    }, false);
  }

  function scrollPage() {
    if (window.pageYOffset > scrollHeight) {
      header.classList.add('header_sticky');
    } else {
      header.classList.remove('header_sticky');
    }
    scrolled = false;
  }

  init();
})();
