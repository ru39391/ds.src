let cardFeatureLink;
const cardFeatureContent = document.querySelectorAll('.card__features-content');
cardFeatureContent.forEach(cardFeatureContentEl => {
  cardFeatureLink = cardFeatureContentEl.querySelector('.card__features-readmore');
  cardFeatureContentEl.addEventListener('click', (e) => {
    if(e.target != cardFeatureLink) {
      e.target.closest('.card__meta').classList.toggle('active');
      e.target.closest('.card__features').classList.toggle('active');
      e.target.parentNode.classList.toggle('active');
    }
  });

  cardFeatureLink.addEventListener('click', (e) => {
    e.target.closest('.card__meta').classList.remove('active');
    e.target.closest('.card__features').classList.remove('active');
    e.target.closest('.card__features-item').classList.remove('active');
  });
});
