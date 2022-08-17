document.getElementById('btn-submit').addEventListener('click', function () {


    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    // Step-4

    if (email === 'belal@gmail.com' && password === 'belal') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid');
    }
})