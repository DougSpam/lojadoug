document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    if (username === 'Belteste09' && password === 'Belteste09') {
        window.location.href = '../dashboard.html'; 
    } else {
        alert('Invalid username or password');
    }
});
