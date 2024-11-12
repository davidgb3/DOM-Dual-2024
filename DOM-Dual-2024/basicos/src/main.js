// selección de elementos del DOM
const appDiv = document.getElementById('app'); 

appDiv.innerText = "Hola Mundo"; // texto plano
appDiv.innerHTML = "<h1>Hola Mundo</h1>"; // interpreta código HTML

// añadir clases a un elemento
appDiv.classList.add("clase1");

// selección de className
const items = document.getElementsByClassName("items");

let n = 0;
for(const i of items){
  // i.textContent=`Hola amigo ${n++}`;
  i.innerText=`Hola amigo ${n++}`;
}

// selección de clase
const saludoP = document.querySelector(".saludo");

//traer todos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo) => {
  saludo.innerText = `Hola Mundo ${index}`;
});

// añadir atributos a una etiqueta
const miGit = document.getElementById('github');
miGit.setAttribute("target", "_blank");
// miGit.removeAttribute("target", "_blank");
miGit.innerText = "Ir a mi GitHub.";