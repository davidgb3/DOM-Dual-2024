
export function Tarea (nombre) { // función constructora
    // propiedades estáticas
    Tarea.contador = 1;
    // propiedades privadas
    // propiedades públicas
    this.id = Tarea.contador++;
    this.nombre = nombre;
    this.completada = false;

    // método público
    this.toggleCompletada = function () {
        this.completada = !this.completada;
    };

    // método privado
    function logEstado(){
        console.log(`La tarea: ${this.nombre} está ${this.completada? 'Completada' : 'Pendiente'}.`);
    }

    // crear una propiedad estática del objeto que lo tengan todas las intancias del objeto (se ahorra memoria)
    Tarea.prototype.info = function () {
        console.log(`La tarea: ${this.nombre} está ${this.completada? 'Completada' : 'Pendiente'}.`);
    };

};

export class TareaClass {
    // variables de clase
    static contador = 1;

    // privada  
    #completada;

    // constructor
    constructor(nombre){
        this.id = TareaClass.contador++;
        this.nombre = nombre;
        this.#completada = false;
    }

    // método público
    toggleCompletada(){
        this.#completada =!this.#completada;
    }

    info(){
        console.log(`La tarea: ${this.nombre} está ${this.#completada? 'Completada' : 'Pendiente'}.`);
    }
};
