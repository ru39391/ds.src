const formTogglers = document.querySelectorAll('.form__toggler_comparing');

function filterArr(arr) {
  return arr.filter((item, position, array) => array.lastIndexOf(item) === position);
}

function getTextContent(elem, selector) {
  return elem.querySelector(selector).textContent;
}

function getTextContentArr(arr, selector, param) {
  return arr.filter(arrEl => {
    if(getTextContent(arrEl, selector) == param) {
      return arrEl;
    }
  });
}

function getValues(formContainer) {
  let paramsArr = []; // все уникальные параметры
  const valuesArr = []; // значения
  const comparedCards = formContainer.querySelectorAll('.card_compared');
  const cardsRows = Array.from(formContainer.querySelectorAll('.params__row'));

  comparedCards.forEach(comparedCardsEl => {
    const paramsCaptionsArr = [];
    const paramsCaptions = comparedCardsEl.querySelectorAll('.params__title');
    paramsCaptions.forEach(paramsCaptionsEl => {
      paramsCaptionsArr.push(paramsCaptionsEl.textContent);
    });
    paramsArr.push(paramsCaptionsArr.join());
  });

  paramsArr = filterArr(paramsArr.join().split(',')); // все уникальные параметры

  paramsArr.forEach(paramsArrEl => {
    valuesArr.push(getTextContentArr(cardsRows, '.params__title', paramsArrEl)); // массив: каждый элемент - массив значений одного параметра
  });

  return valuesArr;
}

function toggleRows(formContainer, booleanParam) {
  const valuesArr = getValues(formContainer);
  valuesArr.forEach((valuesArrEl, index) => {
    const values = valuesArrEl.map(item => getTextContent(item, '.params__value'));
    if(filterArr(values).length == 1) {
      valuesArr[index].forEach(elem => {
        switch(booleanParam) {
          case true:
            elem.classList.remove('d-flex');
            elem.style.display = 'none';
          break;

          case false:
            elem.classList.add('d-flex');
            elem.style = null;
          break;
        }
      });
    }
  });
}

formTogglers.forEach(formTogglersEl => {
  formTogglersEl.addEventListener('change', e =>  {
    const comparingForm = e.target.closest('.comparing-form');
    toggleRows(comparingForm, e.target.checked);
  });
});
