// 1º) crear un formulario que permita validar el email de manera deinamica, si el email no es correcto mostarra un mensaje de error dimamico debajo del campo

import divForm from "./components/divForm.js";
import formComponent from "./components/formComponent.js";

document.addEventListener("DOMContentLoaded", () => {
    // crear contenedor para formulario
    const app = document.getElementById('app');
    
    const divFormulario = divForm();
    const login = formComponent();

    app.append(divFormulario, login);
});



// 3º) crear una lista de lementos que al hacer click sobre uno de llos debe de aparecer un modal (ventana emergente) que diga si quieres eliminralo o no y si se hace click en si, se elimina. 
