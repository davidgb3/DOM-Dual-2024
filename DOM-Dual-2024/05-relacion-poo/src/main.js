// Ej 1
// -- Funciones Contructoras -->

import { Tarea, TareaClass } from "./helpers/ej1";

const tarea1 = new Tarea("Aprender PHP");
const tarea2 = new Tarea("Aprender React");

tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();

// -- Clases -->

const tarea1Clases = new TareaClass("Aprender NodeJS");
const tarea2Clases = new TareaClass("Aprender JavaScript");

tarea1Clases.info();
tarea1Clases.toggleCompletada();
tarea1Clases.info();
tarea2Clases.info();