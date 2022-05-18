$.extend($.validator.messages, {
  required: "Обязательное поле",
  remote: "Пожалуйста, введите правильное значение",
  email: "Неверный формат",
  pattern: "Неверный формат",
  url: "Пожалуйста, введите корректный URL",
  date: "Пожалуйста, введите корректную дату",
  dateISO: "Пожалуйста, введите корректную дату в формате ISO",
  number: "Пожалуйста, введите число",
  digits: "Пожалуйста, вводите только цифры",
  creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
  equalTo: "Пароли должны совпадать",
  extension: "Пожалуйста, выберите файл с правильным расширением.",
  maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов"),
  minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов"),
  rangelength: $.validator.format("Пожалуйста, введите от {0} до {1} символов"),
  range: $.validator.format("Пожалуйста, введите число от {0} до {1}"),
  max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}"),
  min: $.validator.format("Пожалуйста, введите число, большее или равное {0}")
});

$('form').validate();