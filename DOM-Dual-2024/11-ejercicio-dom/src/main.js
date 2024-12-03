import formulario from "./components/formulario.js";


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    const divForm = formulario();
    divForm.addEventListener('submit', () => {
        
    const name = document.getElementById('name').value;
    const surnames = document.getElementById('surnames').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const downloadButton = document.createElement('a');

    const blob = new Blob([`Nombre: ${name} | Apellidos: ${surnames} | Email: ${email} | Teléfono: ${telephone}`],{ type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    console.log(name);

    downloadButton.href = url;
    downloadButton.download = "ej11.txt";
    downloadButton.click();

    });

    app.append(divForm);
});