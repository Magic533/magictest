var form = document.querySelector('.contactForm');
var yourName = form.querySelector('.yourName');
var email = form.querySelector('.email');
var phone = form.querySelector('.phone');
var project = form.querySelector('.project')
var isEmpty = form.querySelectorAll('.isEmpty')


var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

form.addEventListener('submit', function (event) {
  removeValidation();
  for (var i = 0; i < isEmpty.length; i++) {
    if (!isEmpty[i].value) {
      event.preventDefault();
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = 'Поле не может быть пустым';
      form[i].parentElement.insertBefore(error, isEmpty[i]);
    }
  }
});

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.typeMismatch) {
     event.preventDefault();
  } else {
    email.setCustomValidity("");
  }
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Введите корректный Email");
    event.preventDefault();
  }

}, false);


var phoneRegExp = /^([0-9][\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{2,15}$/;

phone.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (phone.validity.typeMismatch) {
     event.preventDefault();
  } else {
    phone.setCustomValidity("");
  }
  var test = phone.value.length === 0 || phoneRegExp.test(phone.value);
  if (test) {
    phone.setCustomValidity("");
  } else {
    phone.setCustomValidity("Введите корректный номер телефона");
    event.preventDefault();
  }

}, false);

