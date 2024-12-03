

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    
    for(let i=0; i<4; i++) {
        const divElemento = document.createElement('div');
        const botonEliminar = document.createElement('button');
        const modal = document.createElement('modal');
        const botonSi = document.createElement('button');
        const botonNo = document.createElement('button');
        botonSi.textContent = 'Si';
        botonNo.textContent = 'No';
        modal.style.display = 'none';
        modal.textContent = ` ¿Quieres eliminar este elemento? --> `;
        modal.append(botonSi, botonNo);

        botonEliminar.textContent = 'Eliminar';
        divElemento.textContent = `Elemento ${i+1}`;

        botonEliminar.addEventListener('click', (e) => {
            e.preventDefault();
            divElemento.appendChild(modal);
            modal.style.display = 'inline';
            botonSi.addEventListener('click', () => {
                divElemento.remove();
                modal.style.display = 'none';
            });
            botonNo.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
        divElemento.appendChild(botonEliminar);
        app.appendChild(divElemento);
    } 
});