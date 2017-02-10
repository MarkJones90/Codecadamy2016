var main = function () {
  $('.dropdown img').click(function() {
    $(this).next().toggle();
  });
  
   $('form').submit(function() {
  var email = $('#email').val();
  var password = $('#password').val();
    
    if(email === "") {
      $(".email-error").append("<p>Please enter your email.</p>");
    }
   if(password === "") {
      $(".password-error").append("<p>Please enter your password.</p>");
    }
  
    return false;
});

  };
$(document).ready(main);
