
// crear instancias de carrito // cargar localStorage

 import { Carrito } from "./components/Carrito";

// crear h1 -- carrito <-- createElement
// crear contenedor form <-- innerHTML
// crear inputs nombre, cantidad, precio <-- innerHTML
// crear boton añadir al carrito <-- innerHTML

// añadir div para colocar los productos de mi carrito

 const carrito = new Carrito();
 carrito.cargarLocalStorage();

// declaracion funciones

const renderListaCarrito = () => {
    const listaProductos = document.getElementById('lista-productos');
    const totalCarrito = document.getElementById('total-carrito');
    listaProductos.innerHTML = carrito.productos.map((producto, index) => {
        return `
            <li data-id="${index}">
                ${producto.obtenerInfo()}
                <button class="btn-editar" data-id="${index}">Editar</button>
                <button class="btn-borrar" data-id="${index}">Borrar</button>
            </li>
        `;
    }).join("");
    totalCarrito.textContent = carrito.calcularTotal();
    
    // listaProductos.querySelector('.btn-borrar').addEventListener('click', () => alert("Borrar"));

    // guardo en localStorage
    carrito.guardarLocalStorage();
};

const agregarProductoHandler = (event) => {
    // no recargar pagina
    event.preventDefault();
    const nombre = document.getElementById('nombreP').value.trim();
    const cantidad = Number(document.getElementById('cantidadP').value);
    const precio = Number(document.getElementById('precioP').value);

    if(nombre && cantidad>0 && precio>0){
        carrito.agregarProducto(nombre, cantidad, precio);
        // pintar producto en el <ul>
        renderListaCarrito();
    }else{
        alert("Error al intoducir los valores.")
    };
    event.target.reset();
};

const manejarAccionesHandler = (event) => {
    const indice = Number(event.target.dataset.id);
    if( event.target.classList.contains("btn-borrar") ){
        carrito.borrarProducto(indice);
        renderListaCarrito();
    }
    if( event.target.classList.contains("btn-editar") ){
        const newCantidad = Number(prompt("Introduce la nueva cantidad", carrito.productos[indice].cantidad));
        if(newCantidad && newCantidad > 0){
            carrito.editarProducto(indice, newCantidad);
            renderListaCarrito();
        }
        
    }
};

function init(){
    document.addEventListener('DOMContentLoaded', () => {
        const app = document.getElementById('app');
        const carritoH1 = document.createElement('h1');
        carritoH1.textContent = 'Carrito Productos';
        app.appendChild(carritoH1);
    
        app.innerHTML += `
            <h2>Añadir Producto al Carrito:</h2> 
            <form id="crearProductosForm" method="post">
                <input type="text" id="nombreP" placeholder="Nombre:"> <br>
                <input type="number" id="cantidadP" placeholder="Cantidad:"> <br>
                <input type="number" id="precioP" placeholder="Precio:"> <br> <br>
                <button type="submit">Agregar Carrito</button>
            </form> <hr>
    
            <h2>Carrito:</h2>
            <div id="Carrito:">
                <ul id="lista-productos">
    
                </ul>
            </div> <hr>

            <footer>
                <p>Total del carrito: <strong id="total-carrito">0</strong>€</p>
            </footer>
        `;

        app.addEventListener('submit', agregarProductoHandler);

        document.getElementById('lista-productos').addEventListener('click', manejarAccionesHandler);

        // una vez que cargue la pagina renderizo el carrito
        renderListaCarrito();
    });
}

init();