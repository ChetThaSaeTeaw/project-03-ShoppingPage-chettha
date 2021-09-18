let message = document.querySelector('.drop-drown');
let spoilButton = document.querySelector('.first-nav');

spoilButton.addEventListener('click', () => {
  // Show/Hide message
  if (message.style.display === 'none') {
    message.style.display = 'flex';
  }
  else {
    message.style.display = 'none';
  }
});