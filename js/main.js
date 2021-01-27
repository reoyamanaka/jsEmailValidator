$(document).ready(() => {
    $(() => {
        $('#submit').on('click', (e) => {
            e.preventDefault();
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            
        });
    })
});