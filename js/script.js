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

        const nombreUsuario =
            document.getElementById("nombre").value.trim();

        const correo =
            document.getElementById("correo").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();

        if (
            nombreUsuario === "" ||
            correo === "" ||
            mensaje === ""
        ) {
            alert("Por favor completa todos los campos");
            return;
        }

        alert("Formulario enviado correctamente");

        formulario.reset();
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