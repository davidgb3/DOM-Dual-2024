/**
 *  Spinner con 3 estados
 *  - Crear Spinner
 *  - Mostrar Spinner
 *  - Ocultar Spinner
 */

export const createSpinner = () => {
    // creamos el Spinner en el DOM
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.classList.add('hidden', 'spinner');
    spinner.textContent = 'Cargando...';
    return spinner;
};

export const showSpinner = () => {
    // mostrar spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
}

export const hideSpinner = () => {
    // ocultar spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden');
}