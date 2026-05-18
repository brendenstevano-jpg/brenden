document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const usernameInput = document.getElementById('username').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const passwordInput = document.getElementById('password').value;
            const messageBox = document.getElementById('message');
            
            if (!usernameInput || !emailInput || !passwordInput) {
                if (messageBox) {
                    messageBox.style.display = 'block';
                    messageBox.style.background = '#ff4e4e';
                    messageBox.style.color = 'white';
                    messageBox.innerText = 'Semua data wajib diisi!';
                }
                return;
            }
            
            const existingUser = localStorage.getItem('registered_username');
            if (existingUser === usernameInput) {
                if (messageBox) {
                    messageBox.style.display = 'block';
                    messageBox.style.background = '#ff4e4e';
                    messageBox.style.color = 'white';
                    messageBox.innerText = 'Username sudah terdaftar! Gunakan nama lain.';
                }
                return;
            }
            
            localStorage.setItem('registered_username', usernameInput);
            localStorage.setItem('registered_email', emailInput);
            localStorage.setItem('registered_password', passwordInput);
            
            alert('Pendaftaran Berhasil! Akun kamu sudah disimpan.');
            window.location.href = 'index.html';
        });
    }
});