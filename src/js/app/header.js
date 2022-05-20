window.addEventListener('scroll', () => {
  if(window.scrollY > document.querySelector('.header').scrollHeight) {
      document.querySelector('.header').classList.add('header_sticky');
  } else {
      document.querySelector('.header').classList.remove('header_sticky');
  }
});
