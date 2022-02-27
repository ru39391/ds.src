document.querySelectorAll('.table-row__header .readmore').forEach(tableRowHeader => {
  tableRowHeader.addEventListener('click', e => {
    e.preventDefault();
    e.target.closest('.table-row').classList.add('active');
  })
});

document.querySelectorAll('.table-row__body .readmore').forEach(tableRowToggler => {
  tableRowToggler.addEventListener('click', e => {
    e.preventDefault();
    e.target.closest('.table-row').classList.remove('active');
  })
});
