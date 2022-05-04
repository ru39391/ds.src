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

const bookingDate = document.querySelector('.booking-heading__date');
const datepickerCells = document.querySelectorAll('.datepicker-cell');
if(bookingDate) {
  datepickerCells.forEach(datepickerCellsEl => {
    datepickerCellsEl.addEventListener('click', e => {
      const pickedDate = new Date(Number(e.target.getAttribute('data-date')));
      bookingDate.textContent = `${pickedDate.getDate()} ${Datepicker.locales.ru.monthsShort[pickedDate.getMonth()]}`;
    });
  });
};
