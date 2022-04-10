const filter = document.querySelector('.filter_sticky');
const filterToggler = document.querySelector('.filter-toggler');
if(filter && filterToggler) {
  filterToggler.addEventListener('click', (e) => {
    document.body.classList.toggle('filter-visible');
    filter.style.top = `${document.querySelector('.header').scrollHeight}px`;
  });
}

let filterBtnArr = [];
let filterArr = [];
document.querySelectorAll('.filter-btn').forEach(filterBtn => {
  filterBtnArr.push(filterBtn);
  filterArr.push(document.querySelector(filterBtn.getAttribute('data-target')));
  filterBtn.addEventListener('click', (e) => {
    document.body.classList.toggle('filter-visible');
    e.target.closest('.header__footer').classList.toggle('active');
    filterBtnArr.forEach(filterBtnArrEl => {
      if(filterBtnArrEl == e.target) {
        filterBtnArrEl.classList.toggle('filter-btn_active');
      } else {
        filterBtnArrEl.classList.remove('filter-btn_active');
      }
    });

    filterArr.forEach(filterArrEl => {
      if(filterArrEl.getAttribute('id') == e.target.getAttribute('data-target').replace('#','')) {
        filterArrEl.classList.toggle('filter_active');
        filterArrEl.style.top = `${document.querySelector('.header').scrollHeight}px`;
      } else {
        filterArrEl.classList.remove('filter_active');
        filterArrEl.style.top = null;
      }
    });
  });
});

window.addEventListener('scroll', () => {
  if(window.scrollY > document.querySelector('.header').scrollHeight) {
      document.querySelector('.header').classList.add('header_sticky');
  } else {
      document.querySelector('.header').classList.remove('header_sticky');
  }
});
