new Swiper('.slides_carousel', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.slides-carousel-next',
    prevEl: '.slides-carousel-prev',
  },
});

new Swiper('.slides_banners', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.slides-banners-pagination',
    clickable: true,
  },
});

new Swiper('.slides_features', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.slides-features-next',
    prevEl: '.slides-features-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

new Swiper('.slides_reviews', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    prevEl: '.slides-reviews-prev',
    nextEl: '.slides-reviews-next',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 'auto',
    },
  },
});