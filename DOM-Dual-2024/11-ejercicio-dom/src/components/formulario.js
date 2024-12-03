

const formulario = () => {
    const app = document.getElementById('app');
    const divForm = document.createElement('div');
    const form = document.createElement('form');

    const name = document.createElement('input');
    name.id = 'name';
    name.setAttribute('placeholder', 'Nombre:');
    name.type = 'text';

    const surnames = document.createElement('input');
    surnames.id ='surnames';
    surnames.setAttribute('placeholder', 'Apellidos:');
    surnames.type = 'text';

    const email = document.createElement('input');
    email.id = 'email';
    email.setAttribute('placeholder', 'Email:');
    email.type = 'email';

    const telephone = document.createElement('input');
    telephone.id = 'telephone';
    telephone.setAttribute('placeholder', 'Teléfono:');
    telephone.type = 'text';

    const submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.textContent = 'Descargar';

    form.append(name, surnames, email, telephone, submitButton);
    divForm.appendChild(form);

    return divForm;
};

export default formulario;