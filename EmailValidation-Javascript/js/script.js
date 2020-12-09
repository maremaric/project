
function validate() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
    }

    if(email == "") {
        form.classList.remove('invalid');
        form.classList.remove('valid');
    }
}

