const breakpoint = window.matchMedia('(min-width:992px)');
let topmenuSwiper;
let gridSwiper;
let tileSwiper;
let togglerSwiper;

const topmenuSwiperActive = () => {
  topmenuSwiper = new Swiper('.topmenu', {
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
const togglerSwiperActive = () => {
  togglerSwiper = new Swiper('.slides_togglers', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.slides_togglers-prev',
      prevEl: '.slides_togglers-next',
    },
  });
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