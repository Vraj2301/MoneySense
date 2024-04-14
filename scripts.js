// Select the navigation menu and toggle button
const navMenu = document.getElementById('nav-menu');
const toggleBtn = document.getElementById('toggle-btn');

// Add an event listener to the toggle button to show/hide the navigation menu
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Select all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add an event listener to each navigation link to hide the navigation menu when clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Select the form for the daily questionnaire
const questionnaireForm = document.getElementById('questionnaire-form');

// Add an event listener to the form to submit the answers when the form is submitted
questionnaireForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the answers from the form
  const answers = {
    question1: questionnaireForm.elements['question1'].value,
    question2: questionnaireForm.elements['question2'].value,
    question3: questionnaireForm.elements['question3'].value,
  };

  // Send the answers to the server to be scored
  fetch('/api/questionnaire', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display the score to the user
      alert(`Your score is ${data.score}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while submitting the questionnaire');
    });
});