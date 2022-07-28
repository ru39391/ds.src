const clientHeight = document.documentElement.clientHeight;
const cartSummary = document.querySelector('.cart-summary');
window.addEventListener('scroll', () => {
  switch (Boolean(cartSummary)) {
    case true:
      if(cartSummary.parentNode.getBoundingClientRect().y <= 0) {
        cartSummary.classList.add('cart-summary_sticky');
      } else {
        cartSummary.classList.remove('cart-summary_sticky');
      }
    break;
  }
});
