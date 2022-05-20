const asideTogglers = Array.from(document.querySelectorAll('.aside-toggler'));
const asides = Array.from(document.querySelectorAll('.aside'));
const classList = {
  asideWrapper: 'aside__wrapper',
  asideToggler: 'aside-toggler',
  asideTogglerActive: 'aside-toggler_active',
  asideActive: 'aside_visible',
};

function toggleSelector(el, selector) {
  el.classList.toggle(selector);
};

function addSelector(el, selector) {
  el.classList.add(selector);
};

function removeSelector(el, selector) {
  el.classList.remove(selector);
};

function checkSelector(el, selector) {
  return el.classList.contains(selector);
};

function removeElSelectors(el, arr, selector) {
  const asideActiveIndex = arr.indexOf(el);
  arr.splice(asideActiveIndex, 1);
  switch (Boolean(arr.length)) {
    case true:
      arr.forEach(arrEl => {
        if(checkSelector(arrEl, selector)) {
          removeSelector(arrEl, selector);
        }
      });
      break;
  };
};

function setYPos(el, selector) {
  const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  if(checkSelector(el, selector)) {
    el.style.transform = `translateY(${headerHeight}px)`;
    document.body.style.overflow = 'hidden';
  } else {
    el.style.transform = 'translateY(0)';
    document.body.style = null;
  }
};

asideTogglers.forEach(asideTogglersEl => {
  asideTogglersEl.addEventListener('click', e => {
    const aside = document.querySelector(e.target.getAttribute('data-target'));
    toggleSelector(e.target, classList.asideTogglerActive);
    toggleSelector(aside, classList.asideActive);
    setYPos(aside, classList.asideActive);
    removeElSelectors(aside, asides, classList.asideActive);
  });
});

asides.forEach(asidesEl => {
  asidesEl.addEventListener('click', e => {
    const aside = e.target.closest('.aside');
    const asideId = aside.id;
    const asideToggler = document.querySelector(`[data-target="#${asideId}"]`);
    if(checkSelector(e.target, classList.asideWrapper)) {
      removeSelector(aside, classList.asideActive);
      removeSelector(asideToggler, classList.asideTogglerActive);
      setYPos(aside, classList.asideActive);
    };
  });
});

document.body.addEventListener('click', e => {
  const asideVisible = document.querySelector('.aside_visible');
  if(asideVisible && !e.target.closest('.aside') && !checkSelector(e.target, classList.asideToggler)) {
    const asideId = asideVisible.id;
    const asideToggler = document.querySelector(`[data-target="#${asideId}"]`);
    removeSelector(asideVisible, classList.asideActive);
    removeSelector(asideToggler, classList.asideTogglerActive);
    setYPos(asideVisible, classList.asideActive);
  }
});
