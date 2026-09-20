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

// =========================
// VALIDACIÓN DEL FORMULARIO
// =========================

const formulario = document.getElementById("formulario-contacto");

const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoAsunto = document.getElementById("asunto");
const campoMensaje = document.getElementById("mensaje");

const mensajeFormulario =
    document.getElementById("mensaje-formulario");


function mostrarError(campo, mensaje) {

    const formGroup = campo.parentElement;

    const errorMensaje =
        formGroup.querySelector(".error-mensaje");

    formGroup.classList.add("error");
    formGroup.classList.remove("correcto");

    errorMensaje.textContent = mensaje;
}


function mostrarCorrecto(campo) {

    const formGroup = campo.parentElement;

    const errorMensaje =
        formGroup.querySelector(".error-mensaje");

    formGroup.classList.remove("error");
    formGroup.classList.add("correcto");

    errorMensaje.textContent = "";
}


function validarCorreo(correo) {

    const expresion =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);
}


function validarFormulario() {

    let formularioValido = true;

    // Nombre
    const nombre = campoNombre.value.trim();

    if (nombre === "") {

        mostrarError(
            campoNombre,
            "Ingresa tu nombre"
        );

        formularioValido = false;

    } else if (nombre.length < 3) {

        mostrarError(
            campoNombre,
            "El nombre debe tener al menos 3 caracteres"
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(campoNombre);
    }


    // Correo
    const correo = campoCorreo.value.trim();

    if (correo === "") {

        mostrarError(
            campoCorreo,
            "Ingresa tu correo electrónico"
        );

        formularioValido = false;

    } else if (!validarCorreo(correo)) {

        mostrarError(
            campoCorreo,
            "Ingresa un correo válido"
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(campoCorreo);
    }


    // Asunto
    const asunto = campoAsunto.value.trim();

    if (asunto === "") {

        mostrarError(
            campoAsunto,
            "Ingresa un asunto"
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(campoAsunto);
    }


    // Mensaje
    const mensaje = campoMensaje.value.trim();

    if (mensaje === "") {

        mostrarError(
            campoMensaje,
            "Escribe un mensaje"
        );

        formularioValido = false;

    } else if (mensaje.length < 10) {

        mostrarError(
            campoMensaje,
            "El mensaje debe tener al menos 10 caracteres"
        );

        formularioValido = false;

    } else {

        mostrarCorrecto(campoMensaje);
    }


    return formularioValido;
}


formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    mensajeFormulario.textContent = "";
    mensajeFormulario.className = "";

    if (validarFormulario()) {

        mensajeFormulario.textContent =
            "Mensaje enviado correctamente.";

        mensajeFormulario.classList.add("exito");

        formulario.reset();

        document
            .querySelectorAll(".form-group")
            .forEach((grupo) => {

                grupo.classList.remove(
                    "correcto",
                    "error"
                );

            });

    } else {

        mensajeFormulario.textContent =
            "Revisa los campos marcados.";

        mensajeFormulario.classList.add("error");
    }

});

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

// =========================
// HABILIDADES
// =========================

const habilidades = [
    {
        nombre: "HTML",
        categoria: "frontend"
    },
    {
        nombre: "CSS",
        categoria: "frontend"
    },
    {
        nombre: "JavaScript",
        categoria: "frontend"
    },
    {
        nombre: "Java",
        categoria: "programacion"
    },
    {
        nombre: "Git",
        categoria: "herramientas"
    }
];

// =========================
// MENÚ HAMBURGUESA
// =========================

const menuToggle = document.getElementById("menu-toggle");
const hamburger = document.getElementById("hamburger");

const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const menuLinks = document.querySelectorAll(".menu-link");

const lineOne = hamburger.querySelector(".line-one");
const lineTwo = hamburger.querySelector(".line-two");
const lineThree = hamburger.querySelector(".line-three");


// =========================
// ANIMACIÓN ☰ → X
// =========================

const toggleMenuAnimation = gsap.timeline({
    paused: true
});

toggleMenuAnimation
    .to(
        lineTwo,
        {
            duration: 0.075,
            scaleX: 0
        },
        0
    )

    .to(
        lineOne,
        {
            duration: 0.125,
            transformOrigin: "50% 50%",
            y: 8,
            ease: "power2.inOut"
        },
        "slide"
    )

    .to(
        lineThree,
        {
            duration: 0.125,
            transformOrigin: "50% 50%",
            y: -8,
            ease: "power2.inOut"
        },
        "slide"
    )

    .to(
        hamburger,
        {
            duration: 0.35,
            rotation: 360,
            ease: "power4.inOut"
        }
    )

    .to(
        lineOne,
        {
            duration: 0.125,
            rotation: 45,
            ease: "power2.inOut"
        },
        "cross"
    )

    .to(
        lineThree,
        {
            duration: 0.125,
            rotation: -45,
            ease: "power2.inOut"
        },
        "cross"
    );


// =========================
// ABRIR MENÚ
// =========================

function abrirMenu() {

    sideMenu.classList.add("open");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    toggleMenuAnimation.play();
}


// =========================
// CERRAR MENÚ
// =========================

function cerrarMenu() {

    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    toggleMenuAnimation.reverse();
}


// =========================
// CLICK HAMBURGUESA / X
// =========================

menuToggle.addEventListener("click", () => {

    const menuAbierto =
        sideMenu.classList.contains("open");

    if (menuAbierto) {
        cerrarMenu();
    } else {
        abrirMenu();
    }

});


// Cerrar haciendo clic afuera
overlay.addEventListener("click", cerrarMenu);


// Cerrar seleccionando una sección
menuLinks.forEach((link) => {

    link.addEventListener("click", cerrarMenu);

});


// Cerrar con Escape
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        sideMenu.classList.contains("open")
    ) {
        cerrarMenu();
    }

});


// =========================
// MODO OSCURO
// =========================

const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.querySelector(".theme-label");

// Leer el tema guardado
const temaGuardado = localStorage.getItem("tema");

// Aplicar el tema al cargar la página
if (temaGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = false;
    themeLabel.textContent = "Modo oscuro";
} else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = true;
    themeLabel.textContent = "Modo claro";
}

// Guardar el cambio cuando el usuario use el selector
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.body.classList.remove("dark-mode");
        themeLabel.textContent = "Modo claro";

        localStorage.setItem("tema", "claro");
    } else {
        document.body.classList.add("dark-mode");
        themeLabel.textContent = "Modo oscuro";

        localStorage.setItem("tema", "oscuro");
    }
});

consoleText(
    [
        "Hello World!", "Coding is fun!", "Welcome to my portfolio!"
    ],
    "text",
    [
        "#0F766E",
        "#2563EB",
        "#7C3AED"
    ]
);

//INICIO 

function consoleText(words, id, colors) {

    if (colors === undefined) {
        colors = ["#0F766E"];
    }

    let visible = true;
    let letterCount = 1;
    let direction = 1;
    let waiting = false;

    const target = document.getElementById(id);
    const consoleCursor = document.getElementById("console");

    target.style.color = colors[0];


    setInterval(() => {

        if (letterCount === 0 && !waiting) {

            waiting = true;

            setTimeout(() => {

                colors.push(colors.shift());
                words.push(words.shift());

                direction = 1;

                target.style.color = colors[0];

                letterCount += direction;

                waiting = false;

            }, 1000);

        } else if (
            letterCount === words[0].length + 1 &&
            !waiting
        ) {

            waiting = true;

            setTimeout(() => {

                direction = -1;

                letterCount += direction;

                waiting = false;

            }, 1200);

        } else if (!waiting) {

            target.textContent =
                words[0].substring(0, letterCount);

            letterCount += direction;
        }

    }, 100);


    setInterval(() => {

        consoleCursor.classList.toggle("hidden");

    }, 400);
}