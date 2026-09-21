// =========================
// MENÚ DE NAVEGACIÓN
// =========================

export function iniciarMenu() {

    const menuToggle =
        document.getElementById("menu-toggle");

    const hamburger =
        document.getElementById("hamburger");

    const sideMenu =
        document.getElementById("side-menu");

    const overlay =
        document.getElementById("overlay");

    const menuLinks =
        document.querySelectorAll(".menu-link");


    if (
        !menuToggle ||
        !hamburger ||
        !sideMenu ||
        !overlay
    ) {
        return;
    }


    const lineOne =
        hamburger.querySelector(".line-one");

    const lineTwo =
        hamburger.querySelector(".line-two");

    const lineThree =
        hamburger.querySelector(".line-three");


    const animacion =
        window.gsap.timeline({
            paused: true
        });


    animacion
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
                rotation: 45
            },
            "cross"
        )

        .to(
            lineThree,
            {
                duration: 0.125,
                rotation: -45
            },
            "cross"
        );


    function abrirMenu() {

        sideMenu.classList.add("open");
        overlay.classList.add("active");

        document.body.classList.add(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        animacion.play();
    }


    function cerrarMenu() {

        sideMenu.classList.remove("open");
        overlay.classList.remove("active");

        document.body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        animacion.reverse();
    }


    menuToggle.addEventListener(
        "click",
        () => {

            if (
                sideMenu.classList.contains("open")
            ) {

                cerrarMenu();

            } else {

                abrirMenu();
            }
        }
    );


    overlay.addEventListener(
        "click",
        cerrarMenu
    );


    menuLinks.forEach((link) => {

        link.addEventListener(
            "click",
            cerrarMenu
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                sideMenu.classList.contains("open")
            ) {

                cerrarMenu();
            }
        }
    );
}