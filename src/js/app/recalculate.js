let cartPrice;
let cartSumm;
const resumm = (evt,value) => {
  if(evt.closest('.js-cart')) {
    cartPrice = 1000*parseFloat(evt.closest('.js-cart').querySelector('.js-price').textContent.replace(' ',''));
    evt.closest('.js-cart').querySelector('.js-summ').textContent = new Intl.NumberFormat('ru-RU').format((value*cartPrice)/1000);
  }
}

document.querySelectorAll('.recalculate__btn_remove').forEach(recalcRemove => {
	recalcRemove.addEventListener('click', (e) => {
		let input = e.target.closest('.recalculate').querySelector('.recalculate__field');
		let count = parseInt(input.value) - 1;
		count = count < 1 ? 1 : count;
		e.target.closest('.recalculate').querySelector('.recalculate__value').textContent = count;
		input.value = count;
    resumm(e.target,count);
		return false;
	});
});
document.querySelectorAll('.recalculate__btn_add').forEach(recalcAdd => {
	recalcAdd.addEventListener('click', (e) => {
		let input = e.target.closest('.recalculate').querySelector('.recalculate__field');
    let count = parseInt(input.value) + 1;
		e.target.closest('.recalculate').querySelector('.recalculate__value').textContent = count;
		input.value = count;
    resumm(e.target,count);
		return false;
	});
});

document.querySelectorAll('.content_expanded').forEach(contentExpanded => {
  contentExpanded.querySelector('.readmore_btn').addEventListener('click', (e) => {
    e.target.closest('.content_expanded').classList.toggle('active');
  });
});
