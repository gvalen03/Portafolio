// =========================
// TEMA CLARO / OSCURO
// =========================

export function iniciarTema() {

    const themeToggle =
        document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }


    const temaGuardado =
        localStorage.getItem("tema");


    if (temaGuardado === "oscuro") {

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.checked = true;

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

        themeToggle.checked = false;
    }


    themeToggle.addEventListener(
        "change",
        () => {

            if (themeToggle.checked) {

                document.body.classList.add(
                    "dark-mode"
                );

                localStorage.setItem(
                    "tema",
                    "oscuro"
                );

            } else {

                document.body.classList.remove(
                    "dark-mode"
                );

                localStorage.setItem(
                    "tema",
                    "claro"
                );
            }


            // Avisamos a otros componentes
            // que el tema cambió.

            window.dispatchEvent(
                new CustomEvent("temaCambiado")
            );
        }
    );
}