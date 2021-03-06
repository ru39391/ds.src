const asideTogglers = Array.from(document.querySelectorAll('.aside-toggler'));
const asides = Array.from(document.querySelectorAll('.aside'));
const classList = {
  asideWrapper: 'aside__wrapper',
  asideTogglerHolder: 'aside-toggler-holder',
  asideToggler: 'aside-toggler',
  asideTogglerActive: 'aside-toggler_active',
  aside: 'aside',
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

function removeElSelectors(el, selector, selectorActive) {
  const arr = Array.from(document.querySelectorAll(`.${selector}`))
  const asideActiveIndex = arr.indexOf(el);
  arr.splice(asideActiveIndex, 1);
  switch (Boolean(arr.length)) {
    case true:
      arr.forEach(arrEl => {
        if(checkSelector(arrEl, selectorActive)) {
          removeSelector(arrEl, selectorActive);
        }
      });
      break;
  };
};

function setYPos(el, selector) {
  const togglebar = document.querySelector('.togglebar');
  const ossfetY = togglebar.getBoundingClientRect().height + togglebar.getBoundingClientRect().y;
  if(checkSelector(el, selector)) {
    el.style.top = `${ossfetY}px`;
    document.body.style.overflow = 'hidden';
  } else {
    el.style.top = 0;
    document.body.style = null;
  }
};

asideTogglers.forEach(asideTogglersEl => {
  asideTogglersEl.addEventListener('click', e => {
    const aside = document.querySelector(e.target.getAttribute('data-target'));
    toggleSelector(e.target.parentNode, classList.asideTogglerHolder);
    toggleSelector(e.target, classList.asideTogglerActive);
    removeElSelectors(e.target, classList.asideToggler, classList.asideTogglerActive);
    toggleSelector(aside, classList.asideActive);
    removeElSelectors(aside, classList.aside, classList.asideActive);
    setYPos(aside, classList.asideActive);
  });
});

asides.forEach(asidesEl => {
  asidesEl.addEventListener('click', e => {
    const aside = e.target.closest(`.${classList.aside}`);
    const asideId = aside.id;
    const asideToggler = document.querySelector(`[data-target="#${asideId}"]`);
    if(checkSelector(e.target, classList.asideWrapper)) {
      removeSelector(aside, classList.asideActive);
      removeSelector(asideToggler.parentNode, classList.asideTogglerHolder);
      removeSelector(asideToggler, classList.asideTogglerActive);
      setYPos(aside, classList.asideActive);
    };
  });
});

document.body.addEventListener('click', e => {
  const asideVisible = document.querySelector(`.${classList.asideActive}`);
  if(asideVisible && !e.target.closest(`.${classList.aside}`) && !checkSelector(e.target, classList.asideToggler)) {
    const asideId = asideVisible.id;
    const asideToggler = document.querySelector(`[data-target="#${asideId}"]`);
    removeSelector(asideVisible, classList.asideActive);
    removeSelector(asideToggler, classList.asideTogglerActive);
    removeSelector(asideToggler.parentNode, classList.asideTogglerHolder);
    setYPos(asideVisible, classList.asideActive);
  }
});
