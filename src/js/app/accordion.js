let accordionArr = [];
const accordion = document.querySelectorAll('.accordion');
const mapsArr = Array.from(document.querySelectorAll('.map'));
accordion.forEach(accordionEl => {
  accordionArr.push(accordionEl);
  accordionEl.querySelector('.accordion__header').addEventListener('click', (e) => {
    const accordionTarget = e.target.getAttribute('data-target');
    accordionArr.forEach(accordionArrEl => {
      if(accordionArrEl == e.target.closest('.accordion')) {
        accordionArrEl.classList.toggle('active');
      } else {
        accordionArrEl.classList.remove('active');
      }
    });
    mapsArr.forEach(mapsArrEl => {
      if(mapsArrEl.id == accordionTarget) {
        mapsArrEl.classList.add('active');
      } else {
        mapsArrEl.classList.remove('active');
      }
    });
  });
});
