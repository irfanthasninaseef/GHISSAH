// Toggle Password Visibility (Generic)
        function togglePassword(inputId, iconId) {
            const passwordInput = document.getElementById(inputId);
            const eyeIcon = document.getElementById(iconId);

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

        // Form Validation UI Simulation
        document.getElementById('signupForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // Reset Errors
            document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            const terms = document.getElementById('terms');

            let isValid = true;

            // Validate Name
            if (!name.value) {
                document.getElementById('nameError').classList.remove('hidden');
                name.classList.add('border-red-500');
                isValid = false;
            }

            // Validate Email
            if (!email.value || !email.value.includes('@')) {
                document.getElementById('emailError').classList.remove('hidden');
                email.classList.add('border-red-500');
                isValid = false;
            }

            // Validate Password
            if (!password.value || password.value.length < 8) {
                document.getElementById('passwordError').classList.remove('hidden');
                password.classList.add('border-red-500');
                isValid = false;
            }

            // Validate Confirm Password
            if (password.value !== confirmPassword.value) {
                document.getElementById('confirmError').classList.remove('hidden');
                confirmPassword.classList.add('border-red-500');
                isValid = false;
            }

            // Validate Terms
            if (!terms.checked) {
                document.getElementById('termsError').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                // Simulate Loading
                const btn = document.getElementById('submitBtn');
                const btnText = document.getElementById('btnText');
                const loader = document.getElementById('loader');

                btn.disabled = true;
                btn.classList.add('opacity-80', 'cursor-not-allowed');
                btnText.classList.add('opacity-0');
                loader.classList.remove('hidden');

                // Simulate API Call delay
                setTimeout(() => {
                    // Alert Success
                    alert('Account Created Successfully! Redirecting to Login...');
                    window.location.href = 'login.html';

                }, 1500);
            }
        });