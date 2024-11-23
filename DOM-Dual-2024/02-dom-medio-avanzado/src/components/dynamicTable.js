// 2º) crear una tabla dinámica: Dado un array de objetos con datos de usuarios (nombre,edad,email) genera una tabla dinamicamente en la que cada fila corresponda a un usuario. Añade funcionalidad para ordenar las filas por nombre y edad haciendo click en los encabezados de las columnas. 2º Parte: Utilizando la lista de usuarios añadir un input para que a medidda que busquemos filtre los usuarios por su nombre.


const dataEjemplo = [
    { nombre: 'Juan', edad: 25, email: 'juan@gmail.com' },
    { nombre: 'Pedro', edad: 30, email: 'pedro@gmail.com' },
    { nombre: 'Maria', edad: 28, email: 'maria@gmail.com' },
    { nombre: 'Ana', edad: 32, email: 'ana@gmail.com' },
    { nombre: 'Luis', edad: 27, email: 'luis@gmail.com' }
];

const dynamicTable = (data, headers) => {
    const divTable = document.createElement('div');
    // creamos la tabla 
    const table = document.createElement('table');
    table.id = 'table-data-users';
    table.style.border = '2px solid black';
    // creamos el thead
    const thead = document.createElement('thead');
    // creamos el tr
    const headerRow = document.createElement('th');
    // recorremos los headers
    headers.array.forEach(header => {
        // creamos cada th
        const th = document.createElement('th');
        th.textContent = header;
        // lógica de ordenación

        headerRow.appendChild(th);
    });
    // añadimos el tr al thead
    thead.appendChild(headerRow);

    // creamos el tbody
    const tbody = document.createElement('tbody');
    // limpiamos la tabla 
    tbody.innerHTML = '';
    // recorremos los datos
    data.array.forEach(user => {
        // creamos el tr
        const trUser = document.createElement('tr');
        trUser.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
        `;
        // inyectamos la tr al tbody
        tbody.appendChild(trUser);
    });
    // añadimos el thead y el tbody a la tabla
    table.append(thead, tbody);
    divTable.appendChild(table);

    return divTable;
};

export default dynamicTable;