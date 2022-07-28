const productList = document.querySelectorAll('.product-list');
productList.forEach(productListEl => {
  productListEl.querySelector('.button').addEventListener('click', (e) => {
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

document.body.addEventListener('click', e => {
  if (e.target.closest('.section__expander')) {
    e.target.closest('.section__expander').classList.toggle('active');
  }
});

/* category menu */
const categoryMenuTitle = document.querySelectorAll('.category-menu__title_type_toggler');
const categoryMenuToggler = document.querySelectorAll('.category-menu__toggler');

function toggleCategoryDropdown(categoryItem, activeClass) {
  const categoryDropdown = categoryItem.nextElementSibling;
  categoryItem.classList.toggle(activeClass);
  if(!categoryDropdown.style.height) {
    categoryDropdown.style.height = categoryDropdown.scrollHeight + 'px';
  } else {
    categoryDropdown.style = null
  }
}

categoryMenuTitle.forEach(toggler => {
  toggler.addEventListener('click', e => {
    e.preventDefault();
    const categoryItem = e.target.closest('.category-menu__item');

    switch(e.target == e.currentTarget) {
      case true:
        if(categoryItem.classList.contains('category-menu__item_active')) {
          location.href = e.currentTarget.href;
        } else {
          toggleCategoryDropdown(categoryItem, 'category-menu__item_active');
        }
        break;

      case false:
        toggleCategoryDropdown(categoryItem, 'category-menu__item_active');
        break;
    }
  });
});
