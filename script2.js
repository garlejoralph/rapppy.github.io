const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Logged in successfully!");
    container.classList.remove('right-panel-active');
};

document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Signed up successfully!");
    container.classList.remove('right-panel-active');
};
