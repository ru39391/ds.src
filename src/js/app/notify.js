const notifyElements = document.querySelectorAll('.notify');
notifyElements.forEach(notifyElementsItem => {
  notifyElementsItem.querySelector('.notify__icon').addEventListener('click', (e) => {
    e.target.closest('.notify').querySelector('.notify__desc').classList.toggle('d-none');
  });
});
