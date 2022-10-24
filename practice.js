document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    console.log(email, password);
    if(email === 'emon46444@gmail.com' && password === '17113'){
        window.location.href = 'myAccount.html'
    }
    else{
        console.log('Invalid User')
    }
})