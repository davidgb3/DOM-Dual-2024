const divForm = () => {
    const divForm = document.createElement('div');
    divForm.classList.add('form-conatiner');
    app.appendChild(divForm);

    const formEmail = document.createElement('form');
    divForm.appendChild(formEmail);

    const lableEmail = document.createElement('lable');
    lableEmail.textContent = "Email: ";
    formEmail.appendChild(lableEmail);

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';
    inputEmail.setAttribute('placeholder', 'ejemplo@gmail.com');
    formEmail.appendChild(inputEmail);

    // creo <p> de verificación del email
    const pEmailCheck = document.createElement('p');
    pEmailCheck.id = 'email-check';
    pEmailCheck.textContent = 'Email no válido.';
    pEmailCheck.style.color = 'red';
    pEmailCheck.style.display = 'none';
    divForm.appendChild(pEmailCheck);

    // lógica de verificación del email
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    inputEmail.addEventListener('input', (event) => {
       const isEmailValid = emailRegex.test(inputEmail.value);
       pEmailCheck.style.display = isEmailValid ? 'none' : 'block';
    });

    return divForm;
};

export default divForm;