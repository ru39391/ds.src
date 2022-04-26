const panel = document.querySelector('.panel');
const panelNavItems = panel.querySelectorAll('.panel__nav-item');
const panelNavLinks = panel.querySelectorAll('.panel__nav-link');
const panelNavBtns = panel.querySelectorAll('.panel__nav-btn');
const panelGrids = panel.querySelectorAll('.panel__grid');
const panelTogglers = panel.querySelectorAll('.panel__toggler');
const panelClose = panel.querySelector('.panel__close');
const readmoreBtns = panel.querySelectorAll('.readmore');

const headerTogglers = document.querySelectorAll('.header__btn_type_toggler');
function showPanelNav(headerToggler) {
  const panelWrapperId = headerToggler.getAttribute('data-target');
  const panelWrapper = panel.querySelector(panelWrapperId);
  headerToggler.classList.toggle('header__btn_active');
  panel.classList.toggle('panel_visible');
  panelWrapper.classList.toggle('panel__wrapper_active');
  if(headerToggler.classList.contains('header__btn_active')) {
    document.body.style.overflow = 'hidden';
    panel.style.height = `${window.innerHeight}px`;
  } else {
    document.body.style = null;
    panel.style.height = null;
  }
};

function hidePanelNav() {
  const panelWrapper = panel.querySelector('.panel__wrapper_active');
  const panelWrapperId = panelWrapper.id;
  panel.style.height = null;
  document.body.style.overflow = 'hidden';
  panel.classList.remove('panel_visible');
  panelWrapper.classList.remove('panel__wrapper_active');
  document.querySelector(`[data-target="#${panelWrapperId}"]`).classList.remove('header__btn_active');
};

function showPanelGrid(id) {
  panelGrids.forEach(panelGridsEl => {
    if(panelGridsEl == panel.querySelector(`${id}`)) {
      panelGridsEl.classList.add('panel__grid_active');
    } else {
      panelGridsEl.classList.remove('panel__grid_active');
    }
  });
};

function showPanel(panelNavBtn) {
  const panelWrapper = panelNavBtn.closest('.panel__wrapper');
  const panelTargetId = panelNavBtn.closest('.panel__nav-item').getAttribute('data-target');
  const panelGrid = panel.querySelector(`${panelTargetId}`);
  panelGrid.classList.toggle('panel__grid_visible');
  if(panelGrid.classList.contains('panel__grid_visible')) {
    panelWrapper.style.overflow = 'hidden';
  } else {
    panelWrapper.style = null;
  }
};

function hidePanel(panelToggler) {
  const panelWrapper = panelToggler.closest('.panel__wrapper');
  const panelGrid = panelToggler.closest('.panel__grid');
  panelGrid.classList.remove('panel__grid_visible');
  if(panelGrid.classList.contains('panel__grid_visible')) {
    panelWrapper.style.overflow = 'hidden';
  } else {
    panelWrapper.style = null;
  }
};

function addPanelNavLinkHover(panelNavItem) {
  panelNavLinks.forEach(panelNavLinksEl => {
    if(panelNavLinksEl == panelNavItem.querySelector('.panel__nav-link')) {
      panelNavLinksEl.classList.add('panel__nav-link_active');
    } else {
      panelNavLinksEl.classList.remove('panel__nav-link_active');
    }
  });
};

function showPanelBrands(readmoreBtn) {
  const panelWrapper = readmoreBtn.closest('.panel__wrapper');
  const panelContent = readmoreBtn.closest('.panel__content');
  const panelSubcategory = panelContent.querySelector('.panel__subcategory');
  readmoreBtn.classList.toggle('checked');
  if(readmoreBtn.classList.contains('checked')) {
    panelSubcategory.style.height = `${panelSubcategory.scrollHeight}px`;
    switch (panelSubcategory.scrollHeight > window.innerHeight) {
      case true:
        panelWrapper.classList.add('panel__wrapper_overflow_scroll');
        break;
    }
  } else {
    panelSubcategory.style.height = null;
    switch (Boolean(panelWrapper.classList.contains('panel__wrapper_overflow_scroll'))) {
      case true:
        panelWrapper.classList.remove('panel__wrapper_overflow_scroll');
        break;
    }
  }
};

function hidePanelBrands(id) {
  const panelGrid = panel.querySelector(`${id}`);
  const panelWrapper = panelGrid.closest('.panel__wrapper');

  const panelSubcategories = panelWrapper.querySelectorAll('.panel__subcategory');
  panelSubcategories.forEach(panelSubcategoriesEl => {
    panelSubcategoriesEl.style.height = null;
    const panelContent = panelSubcategoriesEl.closest('.panel__content');
    const readmoreBtn = panelContent.querySelector('.readmore');

    if(readmoreBtn && readmoreBtn.classList.contains('checked')) {
      readmoreBtn.classList.remove('checked');
    }
  });

  if(panelWrapper.classList.contains('panel__wrapper_overflow_scroll')) {
    panelWrapper.classList.remove('panel__wrapper_overflow_scroll');
  };
};

panelNavItems.forEach(panelNavItemsEl => {
  panelNavItemsEl.addEventListener('mouseover', e => {
    const panelNavItem = e.target.closest('.panel__nav-item');
    const panelTarget = panelNavItem.getAttribute('data-target');
    showPanelGrid(panelTarget);
    hidePanelBrands(panelTarget);
    addPanelNavLinkHover(panelNavItem);
  });
});

readmoreBtns.forEach(readmoreBtnsEl => {
  readmoreBtnsEl.addEventListener('click', e => {
    e.preventDefault();
    showPanelBrands(e.target);
  });
});

panelNavBtns.forEach(panelNavBtnsEl => {
  panelNavBtnsEl.addEventListener('click', e => {
    showPanel(e.target);
  });
});

panelTogglers.forEach(panelTogglersEl => {
  panelTogglersEl.addEventListener('click', e => {
    hidePanel(e.target);
  });
});

headerTogglers.forEach(headerTogglersEl => {
  headerTogglersEl.addEventListener('click', e => {
    showPanelNav(e.target);
  });
});

panelClose.addEventListener('click', e => {
  hidePanelNav();
});
