const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
e.preventDefault();

checkInputs();
});
form.addEventListener('reset', e => {
e.Default();

fun();
});
function checkInputs() {
// trim to remove the whitespaces
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(usernameValue === '') {
  setErrorFor(username, 'Username cannot be blank');
} else {
  setSuccessFor(username);
}

if(emailValue === '') {
  setErrorFor(email, 'Email cannot be blank');
} else if (!isEmail(emailValue)) {
  setErrorFor(email, 'Not a valid email');
} else {
  setSuccessFor(email);
}

if(passwordValue === '') {
  setErrorFor(password, 'Password cannot be blank');
} else {
  setSuccessFor(password);
}

if(password2Value === '') {
  setErrorFor(password2, 'Password2 cannot be blank');
} else if(passwordValue !== password2Value) {
  setErrorFor(password2, 'Passwords does not match');
} else{
  setSuccessFor(password2);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function fun(){
  document.getElementById("form").reset();
}

//A series of code to show the usage and implementation of jquery Selector
alert("Accept Cookies from this site");
// changing the colour of h1 from white to yellow using h1 Selector
$("h2").css("color","yellow");
//get colour of our h2 tag
$("h2").css("color");
console.log($("h1").css("font-size"));
$("button").html("<em>Jquery_edit</em>");
$(".formControl").css("color","red");
$("a").attr("href","driving.html");
$("button").html("<em>Jquery_edit</em>");
$(".formControl").css("color","red");

$("h6").on("mouseover",function(){
  $("h6").css("color","red");
})

$("button").on("click",function(){
  $("h2").animate({opacity:0.2});
});
$("button").on("click",function(){
  $("h2").animate({margin:"40%"});
});
$("button").on("click",function(){
  $("h6").css("font-size","20px").css("color","purple").css("font-family","cursive");
});
