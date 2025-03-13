const passwordField = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('password-strength-text');
const scontainer= document.getElementById('strength-bar-container');
const passwordInput = document.querySelector('input[type="password"]');
const strengthBarContainer = document.querySelector('#strength-bar-container');
const passwordMessageContainer = document.querySelector('.pmcontainer');
const commment=document.getElementById('comment-msg');
document.getElementById('popup-link').addEventListener('click', function() {
  document.getElementById('popup-container').style.display = 'block';
});

document.getElementById('popup-close').addEventListener('click', function() {
  document.getElementById('popup-container').style.display = 'none';
});

// Add event listener to show/hide the strength bar and message container
passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length > 0) {
        // Show strength bar and message container
        strengthBarContainer.style.opacity = 1;
        strengthBarContainer.style.visibility = 'visible';
        passwordMessageContainer.style.opacity = 1;
        passwordMessageContainer.style.visibility = 'visible';
        commment.style.display='none';
    } else {
        // Hide strength bar and message container if input is empty
        strengthBarContainer.style.opacity = 0;
        strengthBarContainer.style.visibility = 'hidden';
        passwordMessageContainer.style.opacity = 0;
        passwordMessageContainer.style.visibility = 'hidden';
        commment.style.visibility='visible';
    }
});

function Strength(password){
  let i = 0;

  if(password.length >= 8){
      i++;    
  }
  if(password.length >=10){
      i++;
  }
  if(/[0-9]/.test(password)){
      i++;
  }
  if(/[A-Z]/.test(password)){
      i++;
  }
   if(/[a-z]/.test(password)){
      i++;
  }
  if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
      i++;
  }
  return i;
}
let container = document.querySelector(".form-container");
document.addEventListener("keyup", function(e) {
    let password = document.querySelector("#ourpassword").value;

  let strengthPercentage = 0;
  let strengthClass = 'weak';
  let strengthMessage = 'Weak';
  let strength = Strength(password);

  if (strength === 2) {
    strengthPercentage = 20;
    strengthClass = 'weak';
    strengthMessage = 'Weak';
  } else if (strength === 3) {
    strengthPercentage = 40;
    strengthClass = 'weak';
    strengthMessage = 'Weak';
  } else if (strength === 4) {
    strengthPercentage = 60;
    strengthClass = 'medium';
    strengthMessage = 'Medium';
  } else if (strength === 5) {
    strengthPercentage = 80;
    strengthClass = 'strong';
    strengthMessage = 'Strong';
  } else if (strength === 6) {
    strengthPercentage = 100;
    strengthClass = 'strong';
    strengthMessage = 'Very Strong';
  }

  strengthBar.style.width = strengthPercentage + '%';
  strengthBar.className = strengthClass;
  strengthText.textContent = strengthMessage;
}
);
document.querySelector("#ourpassword").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 
  }
});