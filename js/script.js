// This JavaScript code is adapted from the "How TO - Popup" tutorial on W3Schools.
// It has been customized to align with the website’s design and functional needs.

// I also used ClaudeAI to help implement the popup trigger logic,
// specifically to ensure the popup appears only when the user reaches the Sankey section.
// All modifications were made with a clear understanding of the code and in accordance with academic integrity guidelines.

// In the code snippet below (1. Popup), Claude AI was used to make the popup overlay function.
// The AI generated code below has been edited and adapted to better match the intended design of the website.
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup-overlay');
  const closeButton = document.getElementById('popup-close');

  const sankeySection = document.querySelector('.sankey-section');
  
  let popupShown = false;

  // Helps to detect when Sankey section comes on user screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !popupShown) {

        popup.classList.remove('hidden');
        popupShown = true;
        observer.unobserve(sankeySection);
      }
    });
  }, {
    threshold: 0.3 // Trigger command for the popup
  });

  if (sankeySection) {
    observer.observe(sankeySection);
  }

  // Close popup when button is clicked
  closeButton.addEventListener('click', function() {
    popup.classList.add('hidden');
  });

  // Close popup when clicking outside the content
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });
});
// End code snippet (1. Popup)