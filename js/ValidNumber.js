$(document).ready(function() {
    $('#tel_number_login').mask('+7 (999) 999-99-99');
  
    // Валидация формы при отправке
    $('#singin_form').on('submit', function(event) {
      var telNumber = $('#tel_number_login').val();
      var password = $('#name').val();
      var error = false;
  
      if (telNumber === '' || !telNumber.match(/^\+7 \(\d{2}\) \d{3}-\d{2}-\d{2}$/)) {
        $('#tel_number_login').addClass('error');
        $('#tel_error').text('Введите корректный номер телефона.');
        error = true;
      } else {
        $('#tel_number_login').removeClass('error');
        $('#tel_error').text('');
      }
  
      if (password === '') {
        $('#password_login').addClass('error');
        $('#name').text('Введите имя.');
        error = true;
      } else {
        $('#password_login').removeClass('error');
        $('#name').text('');
      }
  
      if (error) {
        event.preventDefault();
      }
    });
  
    // Сброс ошибок при изменении полей
    $('#tel_number_login, #name').on('input', function() {
      $(this).removeClass('error');
      $('#tel_error, #name').text('');
    });
  });