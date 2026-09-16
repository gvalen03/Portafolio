// =========================
// VARIABLES Y DATOS
// =========================

const nombre = "Gloria";
let modoOscuro = false;
let visitas = 0;

const edad = 20;
const estudiante = true;

// Dato complejo: objeto
const perfil = {
    nombre: "Gloria",
    profesion: "Estudiante",
    ciudad: "Popayán"
};

// Dato complejo: arreglo de objetos
const proyectos = [
    {
        nombre: "Portafolio personal",
        tecnologia: "HTML, CSS y JavaScript",
        terminado: false
    },
    {
        nombre: "Proyecto académico",
        tecnologia: "Java",
        terminado: true
    }
];


// =========================
// FUNCIÓN DECLARATIVA
// =========================

function saludar() {
    console.log(`Hola, soy ${nombre}`);
}

saludar();


// =========================
// FUNCIÓN EXPRESADA
// =========================

const mostrarPerfil = function () {
    console.log(perfil);
};

mostrarPerfil();


// =========================
// FUNCIÓN FLECHA
// =========================

const mostrarMensaje = () => {
    console.log("Bienvenido a mi portafolio");
};

mostrarMensaje();


// =========================
// FUNCIÓN AUTOEJECUTABLE
// =========================

(function () {
    console.log("Portafolio cargado correctamente");
})();


// =========================
// CONDICIONAL
// =========================

if (estudiante) {
    console.log("Actualmente soy estudiante");
} else {
    console.log("No soy estudiante");
}


// =========================
// OPERADOR TERNARIO
// =========================

const estadoEstudiante = estudiante
    ? "Estudiante activo"
    : "No estudiante";

console.log(estadoEstudiante);


// =========================
// SWITCH
// =========================

const nivel = "principiante";

switch (nivel) {
    case "principiante":
        console.log("Nivel inicial");
        break;

    case "intermedio":
        console.log("Nivel intermedio");
        break;

    case "avanzado":
        console.log("Nivel avanzado");
        break;

    default:
        console.log("Nivel no definido");
}


// =========================
// BUCLES
// =========================

proyectos.forEach((proyecto) => {
    console.log(proyecto.nombre);
});


// =========================
// EVENTO DE RATÓN
// =========================

const botonProyectos = document.getElementById("btn-proyectos");

if (botonProyectos) {
    botonProyectos.addEventListener("click", () => {
        const seccionProyectos = document.getElementById("proyectos");

        seccionProyectos.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// =========================
// EVENTO DE FORMULARIO
// =========================

const formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreUsuario = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        if (
            nombreUsuario === "" ||
            correo === "" ||
            mensaje === ""
        ) {
            alert("Por favor completa todos los campos");
        } else {
            alert("Mensaje enviado correctamente");
            formulario.reset();
        }
    });
}


// =========================
// EVENTO DE TECLADO
// =========================

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        console.log("Presionaste la tecla Escape");
    }
});


// =========================
// CONTADOR DE VISITAS
// =========================

visitas++;

console.log(`Visitas en esta sesión: ${visitas}`);