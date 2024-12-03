
export function Empleado (nombre, edad, puesto){
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
    // salario compartido para la clase
    Empleado.prototype.calcularSalario () = function () {
        const salarioBase = {
            junior: 1500,
            senior: 2500,
            master: 5000
        };
        return salarioBase[this.puesto] || 0;
    };

    Empleado.prototype.info = function () {
        return `El empleado ${this.nombre} tiene ${this.edad} años y es un ${this.puesto} y cobra ${this.calcularSalario()}€.`;
    };

};

// subFuncion constructora

export function empleadoFreelance (nombre, edad, precioHora) {
    Empleado.call(this, nombre, eada, "freelance");
    this.precioHora = precioHora;
    // tengo que heredar los métodos de la función constructora padre
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    // y que el constructor sea el del padre
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

    // sobreescibimos el metodo calcularSalario y el info
    EmpleadoFreelance.prototype.calcularSalario = function () {
        
    };

    EmpleadoFreelance.prototype.info = function () {

    };
};