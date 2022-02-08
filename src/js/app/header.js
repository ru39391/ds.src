const filter = document.querySelector('.filter_sticky');
if(filter) {
  document.querySelector('.filter-toggler').addEventListener('click', (e) => {
    document.body.classList.toggle('filter-visible');
    filter.style.top = `${document.querySelector('.header').scrollHeight}px`;
  });
}

window.addEventListener('scroll', () => {
  if(window.scrollY > document.querySelector('.header').scrollHeight) {
      document.querySelector('.header').classList.add('header_sticky');
  } else {
      document.querySelector('.header').classList.remove('header_sticky');
  }
});