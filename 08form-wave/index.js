const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
console.log(emailInput, passwordInput)

emailInput.addEventListener('focus', addChangeClass);
passwordInput.addEventListener('focus', addChangeClass);

function addChangeClass(evt) {
    console.log(evt);
    evt.target.classList.add('change');
}