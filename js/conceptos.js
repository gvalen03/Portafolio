import {
    nombre,
    estudiante,
    perfil,
    proyectos
} from "./datos.js";


// =========================
// FUNCIÓN DECLARATIVA
// =========================

function saludar() {

    console.log(
        `Hola, soy ${nombre}`
    );
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

    console.log(
        "Bienvenido a mi portafolio"
    );

};

mostrarMensaje();


// =========================
// FUNCIÓN AUTOEJECUTABLE
// =========================

(function () {

    console.log(
        "Portafolio cargado correctamente"
    );

})();


// =========================
// CONDICIONAL
// =========================

if (estudiante) {

    console.log(
        "Actualmente soy estudiante"
    );

} else {

    console.log(
        "No soy estudiante"
    );
}


// =========================
// TERNARIO
// =========================

const estadoEstudiante =
    estudiante
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

        console.log(
            "Nivel no definido"
        );
}


// =========================
// BUCLE
// =========================

proyectos.forEach((proyecto) => {

    console.log(
        proyecto.nombre
    );

});