function Validation() {
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var error_message = document.getElementById('error_message').value;

  error_message.style.padding = '10px';

  if (name.length < 2) {
    test = "Name Must Be 6 or More Characters";
    error_message.innerHTML = text;
    return false;
  }

  if (lastname.length < 2) {
    test = "Name Must Be 6 or More Characters";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = 'Please Enter Valid Phone Number';
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf('@') == -1 || email.length < 10) {
    text = 'Please Enter Valid Email';
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 140) {
    text = 'Please Enter More Than 140 Characters';
    error_message.innerHTML = text;
    return false;
  }


}

