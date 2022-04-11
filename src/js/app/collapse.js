const productList = document.querySelectorAll('.product-list');
productList.forEach(productListEl => {
  productListEl.querySelector('.btn').addEventListener('click', (e) => {
    e.target.closest('.product-list').classList.toggle('product-list_active');
  });
});

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

document.querySelectorAll('.category-menu__toggler').forEach(categoryToggler => {
  categoryToggler.addEventListener('click', e => {
    e.preventDefault();
    let categoryItem = e.target.closest('.category-menu__item');
    let categoryDropdown = categoryItem.nextElementSibling;
    categoryItem.classList.toggle('category-menu__item_active');
    if(!categoryDropdown.style.height) {
      categoryDropdown.style.height = categoryDropdown.scrollHeight + 'px';
    } else {
      categoryDropdown.style = null
    }
  })
});

document.body.addEventListener('click', e => {
  if (e.target.closest('.section__expander')) {
    e.target.closest('.section__expander').classList.toggle('active');
  }
});
