const form = document.querySelector('#oneform');
const input = document.querySelector('#input');
const errorImage = document.querySelector('#error');
const button = document.querySelector('#btn');
const errorMessage = document.querySelector('#msg');
const email = input.value;
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (!email || !validEmail.test(email)) {
        errorMessage.style.display = 'inline';
        errorImage.style.display = 'inline';
    }
    else {
        errorMessage.style.display = 'none';
        errorImage.style.display = 'none';
    }
});
