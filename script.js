console.log("NUEVO SCRIPT");

const cursos = document.querySelectorAll(".curso");
const buscador = document.querySelector("input");

if (buscador) {
    buscador.addEventListener("input", function() {
        const texto = buscador.value.toLowerCase();
        cursos.forEach(function(curso) {
            const nombre = curso.querySelector("h2").textContent.toLowerCase();
            if (nombre.includes(texto)) {
                curso.style.display = "block";
            } else {
                curso.style.display = "none";
            }
        });
    });
}

const botonInscribirse = document.getElementById("inscribirse");
if (botonInscribirse) {
    botonInscribirse.addEventListener("click", function() {
        localStorage.setItem("cursoPython", "inscripto");
        botonInscribirse.textContent = "Ya estás inscripto";
        alert("Te inscribiste al curso");
    });
}

const misCursos = document.getElementById("misCursos");
if (misCursos && localStorage.getItem("cursoPython") === "inscripto") {
    misCursos.innerHTML = `
        <h3>Python desde cero</h3>
        <p>Curso en progreso</p>
        <a href="curso.html">
            <button>Continuar curso</button>
        </a>
    `;
}