// =========================
// SECCIÓN INICIO
// =========================

const coloresClaro = [
    "#0F766E",
    "#2563EB",
    "#7C3AED"
];

const coloresOscuro = [
    "#EABF3A",
    "#F5D66F",
    "#E7E5E4"
];


function obtenerColoresConsola() {

    return document.body.classList.contains(
        "dark-mode"
    )
        ? coloresOscuro
        : coloresClaro;
}


function consoleText(words, id) {

    const target =
        document.getElementById(id);

    const consoleCursor =
        document.getElementById("console");


    if (!target || !consoleCursor) {
        return;
    }


    let visible = true;

    let letterCount = 1;

    let direction = 1;

    let waiting = false;

    let indiceColor = 0;


    function actualizarColor() {

        const colores =
            obtenerColoresConsola();

        target.style.color =
            colores[
                indiceColor % colores.length
            ];
    }


    actualizarColor();


    window.addEventListener(
        "temaCambiado",
        actualizarColor
    );


    setInterval(() => {

        if (
            letterCount === 0 &&
            !waiting
        ) {

            waiting = true;

            setTimeout(() => {

                words.push(words.shift());

                indiceColor++;

                actualizarColor();

                direction = 1;

                letterCount += direction;

                waiting = false;

            }, 1000);

        } else if (
            letterCount ===
                words[0].length + 1 &&
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
                words[0].substring(
                    0,
                    letterCount
                );

            letterCount += direction;
        }

    }, 100);


    setInterval(() => {

        visible = !visible;

        consoleCursor.style.opacity =
            visible ? "1" : "0";

    }, 400);
}


function iniciarBotonProyectos() {

    const boton =
        document.getElementById(
            "btn-proyectos"
        );

    const proyectos =
        document.getElementById(
            "proyectos"
        );


    if (!boton || !proyectos) {
        return;
    }


    boton.addEventListener(
        "click",
        () => {

            proyectos.scrollIntoView({
                behavior: "smooth"
            });

        }
    );
}


export function iniciarInicio() {

    iniciarBotonProyectos();

    consoleText(
        [
            "Hello World!",
            "Coding is fun!",
            "Welcome to my portfolio!"
        ],
        "text"
    );
}