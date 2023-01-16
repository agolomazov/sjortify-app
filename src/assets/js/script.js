const input = document.getElementById('link-input');
const errMsg = document.getElementById("err-msg");
const linkForm = document.getElementById("link-form");

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById('menu');

linkForm.addEventListener('submit', formSubmit);
input.addEventListener('keydown', clearErrorMsg);
menuBtn.addEventListener('click', navToggle);

function formSubmit(e) {
  e.preventDefault();
  
  if (input.value === '') {
    errMsg.innerText = 'Please enter something';
    input.classList.add('border-red');
  } else if (!validateUrl(input.value)) {
    errMsg.innerText = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.innerText = "";
    input.classList.remove("border-red");
    alert('Success!');

    input.value = '';
  }
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

function clearErrorMsg() {
  errMsg.innerText = "";
}

function navToggle(e) {
  e.preventDefault();

  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden').toggle('flex');
}
