let accordionArr = [];
const accordion = document.querySelectorAll('.accordion');
accordion.forEach(accordionEl => {
  accordionArr.push(accordionEl);
  accordionEl.querySelector('.accordion__header').addEventListener('click', (e) => {
    accordionArr.forEach(accordionArrEl => {
      if(accordionArrEl == e.target.closest('.accordion')) {
        accordionArrEl.classList.toggle('active');
        if (!accordionArrEl.querySelector('.accordion__body').style.height) {
          accordionArrEl.querySelector('.accordion__body').style.height = accordionArrEl.querySelector('.accordion__body').scrollHeight + 'px';
        } else {
          accordionArrEl.querySelector('.accordion__body').style.height = null;
        }
      } else {
        accordionArrEl.classList.remove('active');
        accordionArrEl.querySelector('.accordion__body').style.height = null;
      }
    });
  });
});