function validation() {
  var name = document.getElementById('first_name').value;
  var lastname = document.getElementById('last_name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var error_message = document.getElementById('error_message');

  error_message.style.padding = '10px';

  if (name.length < 2) {
    text = "Name Must Be 6 or More Characters";
    error_message.innerHTML = text;
    return false;
  } else {
    console.log('not working!');
  }

  if (lastname.length < 2) {
    text = "Name Must Be 6 or More Characters";
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

  if (message.length <= 14) {
    text = 'Please Enter More Than 140 Characters';
    error_message.innerHTML = text;
    return false;
  }

  error_message.style.backgroundColor = 'green';
  error_message.style.color = 'white';
  error_message.innerText = 'Form Submitted Successfully!';
  return false;

}

console.log(error_message);