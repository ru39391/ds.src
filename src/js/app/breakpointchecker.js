const breakpoint = window.matchMedia('(min-width:992px)');
let topmenuSwiper;
let gridSwiper;
let tileSwiper;
let togglerSwiper;

const topmenuSwiperActive = () => {
  topmenuSwiper = new Swiper('.topmenu__wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
  });
};
const gridSwiperActive = () => {
  gridSwiper = new Swiper('.slides_grid', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.slides_grid-prev',
      prevEl: '.slides_grid-next',
    },
  });
};
const tileSwiperActive = () => {
  tileSwiper = new Swiper('.slides_tile', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerColumn: 5,
      },
      576: {
        slidesPerView: 4,
        slidesPerColumn: 3,
      },
      320: {
        slidesPerView: 4,
        slidesPerColumn: 2,
      },
    },
  });
};

const slidesTogglersSel = '.slides_togglers';
const togglerSwiperActive = () => {
  if(document.querySelector(slidesTogglersSel)) {
    const slidesTogglersParent = document.querySelector(slidesTogglersSel).parentNode;
    togglerSwiper = new Swiper(slidesTogglersSel, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
        nextEl: slidesTogglersParent.querySelector('.slides_togglers-prev'),
        prevEl: slidesTogglersParent.querySelector('.slides_togglers-next'),
      },
    });
  }
};

const breakpointChecker = () => {
  if ( breakpoint.matches === true ) {
    if (topmenuSwiper !== undefined) {
      topmenuSwiper.destroy( true, true );
      return;
    }
    if (gridSwiper !== undefined) {
      gridSwiper.destroy( true, true );
      return;
    }
    if (tileSwiper !== undefined) {
      tileSwiper.destroy( true, true );
      return;
    }
    if (togglerSwiper !== undefined) {
      togglerSwiper.destroy( true, true );
      return;
    }
  } else if ( breakpoint.matches === false ) {
    topmenuSwiperActive();
    gridSwiperActive();
    tileSwiperActive();
    togglerSwiperActive();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
