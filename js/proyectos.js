import { proyectos } from "./datos.js";

export function iniciarProyectos() {

    const contenedor =
        document.getElementById("contenedor-proyectos");

    if (!contenedor) {
        return;
    }

    proyectos.forEach((proyecto) => {

        const articulo =
            document.createElement("article");

        articulo.classList.add("proyecto-card");

        const tecnologias =
            proyecto.tecnologias
                .map(
                    (tecnologia) =>
                        `<span>${tecnologia}</span>`
                )
                .join("");

        articulo.innerHTML = `
            <div class="proyecto-contenido">

                <div class="proyecto-encabezado">
                    <h3>${proyecto.nombre}</h3>

                    <span class="proyecto-estado">
                        ${proyecto.estado}
                    </span>
                </div>

                <p>
                    ${proyecto.descripcion}
                </p>

                <div class="proyecto-tecnologias">
                    ${tecnologias}
                </div>

                <div class="proyecto-acciones">
                    <a
                        href="${proyecto.repositorio}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secundario"
                    >
                        Ver en GitHub
                    </a>
                </div>

            </div>
        `;

        contenedor.appendChild(articulo);
    });
}