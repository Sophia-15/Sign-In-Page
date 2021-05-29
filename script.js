let input = document.getElementById('password');
let icon = document.getElementById('view');

icon.addEventListener('click', function () {
    icon.classList.toggle('visible');
    if (icon.classList.contains('visible')) {
        icon.src = 'assets/eye-off.svg';
        input.type = 'text';
    } else {
        icon.src = 'assets/eye.svg';
        input.type = 'password';
    }
})