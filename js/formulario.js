// =========================
// FORMULARIO DE CONTACTO
// =========================

const formulario =
    document.getElementById("formulario-contacto");

const campoNombre =
    document.getElementById("nombre");

const campoCorreo =
    document.getElementById("correo");

const campoAsunto =
    document.getElementById("asunto");

const campoMensaje =
    document.getElementById("mensaje");

const toast =
    document.getElementById("toast");

const toastMensaje =
    document.getElementById("toast-mensaje");


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


function mostrarToast(mensaje) {

    toastMensaje.textContent = mensaje;

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 3000);
}


function limpiarFormulario() {

    formulario.reset();

    document
        .querySelectorAll(".form-group")
        .forEach((grupo) => {

            grupo.classList.remove(
                "correcto",
                "error"
            );

        });
}


export function iniciarFormulario() {

    if (!formulario) {
        return;
    }

    formulario.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            if (!validarFormulario()) {
                return;
            }

            mostrarToast(
                "Mensaje enviado correctamente."
            );

            limpiarFormulario();
        }
    );
}