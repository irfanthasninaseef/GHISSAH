// Toggle Password Visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eyeIcon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('ri-eye-line');
    eyeIcon.classList.add('ri-eye-off-line');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('ri-eye-off-line');
    eyeIcon.classList.add('ri-eye-line');
  }
}

// Form Validation
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  // validation logic here
});
