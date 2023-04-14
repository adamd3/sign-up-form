const inputs = document.querySelectorAll('input');
let password = '';

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.type === 'password' && input.id === 'password') {
      password = input.value;
    } 
    validate(input, password);
  });
});

function validate(input, password, confirmPassword) {
  const error = input.parentNode.querySelector('.error-message');
  if (error) {
    input.parentNode.removeChild(error);
  }
  input.classList.remove('error');

  switch(input.type) {
    case 'text':
      if (input.value.trim() === '') {
        input.classList.add('error');
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'This field is required';
        input.parentNode.appendChild(errorMessage);
      }
      break;
    case 'email':
      if (input.value.trim() === '' || !/\S+@\S+\.\S+/.test(input.value)) {
        input.classList.add('error');
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Please enter a valid email address';
        input.parentNode.appendChild(errorMessage);
      }
      break;
    case 'tel':
      if (input.value.trim() === '' || !/^\d{10}$/.test(input.value)) {
        input.classList.add('error');
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Please enter a valid phone number';
        input.parentNode.appendChild(errorMessage);
      }
      break;
    case 'password':
      if (input.value.trim() === '' || input.value.length < 8) {
        input.classList.add('error');
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Password must be at least 8 characters long';
        input.parentNode.appendChild(errorMessage);
      } else if (input.value !== password) {
        input.classList.add('error');
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Passwords do not match';
        input.parentNode.appendChild(errorMessage);
      }
      break;
    case 'submit':
      break;
    default:
      break;
  }
}
