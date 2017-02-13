var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();

    //enter first name //
    
    if(firstName === "") {
      $(".first-name-error").append("<p>Please enter your first name.</p>");
    };
      

	// enter last name //

        var lastName = $('#last').val();

    if(lastName === "") {
      $(".last-name-error").append("<p>Please enter your last name.</p>");
    };


	//enter email//

        var email = $('#email').val();

    if(email === "") {
      $(".email-error").append("<p>Please enter your email address.</p>");
    } else 
      if (email==="mark@hotmail.com") {
        $(".email-error").append("<p>This email is already taken.</p>");
      } ;
    
//enter password//
		
    var password = $('#password').val();

    if(password === "") {
      $(".password-error").append("<p>Please enter a password.</p>");
    } else 
      if (password.length<8) {
        $(".password-error").append("<p>Short passwords are easy to guess. Try one with at least 8 charactures.</p>");

    };
     event.preventDefault();

  return false;
  });
 
};
$(document).ready(main);
