
export default function formComponent(){
    const divFormLogin = document.createElement('div');
    divFormLogin.id = 'form-container-login';
    divFormLogin.classList.add('form-container-login');

    const formEmail = document.createElement('form');
    formEmail.id = 'form-login';

    const labelUSername = document.createElement('label');
    labelUSername.textContent = 'Username: ';
    
    const inputUsername = document.createElement('input');
    inputUsername.id = 'username';
    inputUsername.type = 'text';
    inputUsername.name = 'username';
    inputUsername.placeholder = 'Username';

    const lablePassword = document.createElement('label');
    lablePassword.textContent = 'Password: ';

    const inputPassword = document.createElement('input');
    inputPassword.id = 'password';
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Password';

    const button = document.createElement('button');
    button.textContent = 'Login';
    button.type ='submit';
    button.id = 'button-login';

    formEmail.append(labelUSername, inputUsername, lablePassword, inputPassword, button); // <-- Inserta todos a la vez.
    divFormLogin.appendChild(formEmail); 

    return divFormLogin;
};

// hacer un menu de registro 