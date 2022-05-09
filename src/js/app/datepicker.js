import Datepicker from 'vanillajs-datepicker/Datepicker';

(function () {
  Datepicker.locales.ru = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    daysMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    titleFormat: 'MM y',
    format: 'dd/mm/yyyy',
    weekStart: 0
  };
})();

const bookingFormDatepicker = document.querySelector('.booking-form__datepicker');
const datepicker = new Datepicker(bookingFormDatepicker, {
  language: 'ru',
  weekStart: 1,
  nextArrow: '',
  prevArrow: '',
  minDate: 'today'
});

const bookingForm = document.querySelector('.booking-form');
const bookingDate = document.querySelector('.booking-heading__date');
const bookingTime = document.querySelector('.booking-heading__time');
const bookingHeadings = document.querySelectorAll('.booking-heading');
const datepickerCells = document.querySelectorAll('.datepicker-cell');
const bookingFormLabels = document.querySelectorAll('.booking-form__label');
const bookingFormCols = Array.from(document.querySelectorAll('.booking-form__col'));
const formFields = {
  date: bookingForm.querySelector('.form__field_value_date'),
  time: bookingForm.querySelector('.form__field_value_time')
};

function removeInactiveClass(elem, selector) {
  if(elem.classList.contains(selector)) {
    elem.classList.remove(selector);
  }
};
function addInactiveClass(elem, selector) {
  if(!elem.classList.contains(selector)) {
    elem.classList.add(selector);
  }
};
function removeHeadingClass(target, elem, selector) {
  if(target != elem.getAttribute('data-target')) {
    removeInactiveClass(elem, selector);
  }
};

if(bookingDate) {
  datepickerCells.forEach(datepickerCellsEl => {
    datepickerCellsEl.addEventListener('click', e => {
      const currentColID = e.target.closest('.booking-form__col').id;
      const pickedDate = new Date(Number(e.target.getAttribute('data-date')));
      const dateFull = `${pickedDate.getDate()} ${Datepicker.locales.ru.monthsShort[pickedDate.getMonth()]} ${pickedDate.getFullYear()}`;

      bookingDate.textContent = `${pickedDate.getDate()} ${Datepicker.locales.ru.monthsShort[pickedDate.getMonth()]}`;
      bookingTime.textContent = '';

      formFields.date.value = dateFull;
      formFields.time.value = '';

      bookingFormLabels.forEach(bookingFormLabelsEl => {
        removeInactiveClass(bookingFormLabelsEl, 'booking-form__label_inactive');
      });
      bookingHeadings.forEach(bookingHeadingsEl => {
        removeHeadingClass(currentColID, bookingHeadingsEl, 'booking-heading_active');
      });
    });
  });
};

bookingFormLabels.forEach(bookingFormLabelsEl => {
  bookingFormLabelsEl.addEventListener('click', e => {
    bookingTime.textContent = `| ${e.target.textContent}`;
    formFields.time.value = e.target.textContent;
    bookingHeadings.forEach(bookingHeadingsEl => {
      addInactiveClass(bookingHeadingsEl, 'booking-heading_active');
    });
  });
});

bookingHeadings.forEach(bookingHeadingsEl => {
  bookingHeadingsEl.addEventListener('click', e => {
    const bookingHeadingTarget = e.currentTarget.getAttribute('data-target');
    const bookingFormColCurr = bookingFormCols.indexOf(document.querySelector(`#${bookingHeadingTarget}`));
    bookingForm.style.transform = `translateX(-${100*bookingFormColCurr}%)`;
    if(bookingFormColCurr == bookingFormCols.length - 1){
      addInactiveClass(e.currentTarget.closest('.row').querySelector('.booking-heading'), 'booking-heading_checked');
    } else {
      removeInactiveClass(e.currentTarget.closest('.row').querySelector('.booking-heading'), 'booking-heading_checked');
    };
  });
});
