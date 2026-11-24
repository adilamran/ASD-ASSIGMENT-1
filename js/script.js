console.log("stript.js is connected!")

var projectsvar = document.getElementById("projectsvar");
var skillsvar = document.getElementById("skillsvar");

//for greeting depending on time of day
try{
  var d = new Date();
  var hours = d.getHours();
  console.log(hours);

  const timenow = document.querySelector("#timenow");

  function goodtime(){}
      if (hours <= 12){
          timenow.textContent = "GOOD MORNING!";
      } else if (hours <= 17){
          timenow.textContent = "GOOD AFTERNOON!";
      } else {
          timenow.textContent = "GOOD EVENING!";
      } 

  //for card in index.html to be able to click
  function navigateToPage(pageUrl){
      window.location.href = pageUrl;
    }
} catch (error){
  console.log(error)
}

//for disclosure card
'use strict';

document.addEventListener('click', (e) => {
  handleInteraction(e, true);
});
document.addEventListener('mousedown', (e) => {
  handleInteraction(e, false);
});
document.addEventListener('mouseup', handlePressEnd);

function handleInteraction(e, isClick) {
  const disclosureCard = e.target.closest('.disclosure-card');
  if (!disclosureCard) return;

  const button = disclosureCard.querySelector('button[aria-expanded]');
  const isTextSelected = window.getSelection().toString().length > 0;
  const target = e.target;
  const targetTag = target.tagName.toLowerCase();

  if (
    (button !== target && (isFocusable(target) || targetTag === 'label')) ||
    isTextSelected
  )
    return;

  if (isClick) {
    const isExpanded = button.ariaExpanded === 'true';
    const details = disclosureCard.querySelector('.details');
    button.ariaExpanded = isExpanded ? 'false' : 'true';
    details.inert = isExpanded;
    button.focus();
  } else {
    disclosureCard.setAttribute('data-being-pressed', 'true');
  }
}

function handlePressEnd() {
  document
    .querySelector('.disclosure-card[data-being-pressed]')
    ?.removeAttribute('data-being-pressed');
}

const isFocusable = (element) => element.tabIndex >= 0 && !element.disabled;


//for project
try {

  var modal1 = document.getElementById("myModal1");
  var btn1 = document.getElementById("myBtn1");
  var span1 = document.getElementsByClassName("close1")[0];

  btn1.onclick = function() {
    modal1.style.display = "block";
  }

  span1.onclick = function() {
    modal1.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("myBtn2");
  var span2 = document.getElementsByClassName("close2")[0];

  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span2.onclick = function() {
    modal2.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

  var modal3 = document.getElementById("myModal3");
  var btn3 = document.getElementById("myBtn3");
  var span3 = document.getElementsByClassName("close3")[0];

  btn3.onclick = function() {
    modal3.style.display = "block";
  }

  span3.onclick = function() {
    modal3.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

} catch (error){
  console.log (error)
}


//for my contact
try{
// scripts.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});
} catch(error){
  console.log(error)
}
