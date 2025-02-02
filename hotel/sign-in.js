
function toggle(x){
  if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
}
function togglePassword() {
  var x = document.getElementById("pwd");
  toggle(x);
  var x = document.getElementById("confirm-password");
  toggle(x);
}

function verifyPassword() {
  var password = document.querySelector(".password").value;
  var confirmPassword = document.querySelector(".confirmedPassword").value;
  if (password=== confirmPassword) {
    localStorage.setItem('password', JSON.stringify(password));
    togglePassword();
    alert('good to go');
  } else {
    if(password.type === 'password' && confirmPassword.type === 'password') {
      alert('password mismatch')
    } else {
      password.type = 'password';
      confirmPassword.type = 'password';
    }
  }
}
var confirmPassword = document.querySelector(".confirmedPassword");
console.log(confirmPassword.innerHTML)