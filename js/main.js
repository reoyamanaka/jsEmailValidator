$(document).ready(() => {
    $(() => {
        $('#submit').on('click', (e) => {
            let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let email = document.getElementById('email').value;
            //check that email is not empty
            if (email === ""){
                alert('Email required.');
                return false;
            } else {
                if(email.match(mailFormat)){
                    alert("Valid email address.");
                    return true;
                } else {
                    alert("You have entered an invalid email address.");
                    email.focus();
                    return false;
                }
            }
        });
    })
});