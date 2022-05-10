$('#form-reg').validate({
  rules: {
    reg__username: 'required',
    reg__phone: 'required',
    reg__email: {
      required: true,
      email: true
    },
    reg__confidential: 'required',
  },
  messages: {
    reg__username: 'Поле обязательно для заполнения',
    reg__phone: 'Поле обязательно для заполнения',
    reg__email: 'Ведите e-mail',
    reg__confidential: 'Необходимо принять условия политики конфидециальности',
  },
});

$('#form-login').validate({
  rules: {
    login__username: 'required',
    login__pwd: {
      required: true,
      minlength: 5
    },
  },
  messages: {
    login__username: 'Поле обязательно для заполнения',
    login__pwd: 'Поле обязательно для заполнения',
  },
});
