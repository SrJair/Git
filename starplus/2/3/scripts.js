// Variables para el contador
let countdown = 1;
const timerDisplay = document.getElementById("timer");
const nextButton = document.getElementById("nextButton");
const nextLink = document.getElementById("nextLink");

// Función para actualizar el contador
function updateCountdown() {
    timerDisplay.textContent = `Tiempo restante: ${countdown}`;
    countdown--;

    if (countdown < 0) {
        // Cuando el contador llega a cero, muestra el botón "Next"
        nextButton.style.display = "block";
        timerDisplay.style.display = "none"; // Oculta el contador
        nextLink.style.display = "block"; // Muestra el enlace "Next 1/4"
    }
}

// Inicialmente, oculta el botón "Next"
nextButton.style.display = "none";

// Iniciar el contador
setInterval(updateCountdown, 1000);

// Evento para el botón "Next"
nextButton.addEventListener("click", () => {
    // Aquí puedes agregar lógica para mostrar la siguiente pregunta del quiz.
    // Por ejemplo, ocultar la pregunta actual y mostrar la siguiente.

    // Luego, desplázate hacia el enlace "Next 1/4"
    nextLink.scrollIntoView({ behavior: "smooth" });
});

// Evento para el enlace "Next 1/4"
nextLink.addEventListener("click", () => {
    // Array de URLs posibles
    const urls = [
        "4/4.html"
    ];

    // Obtén un índice aleatorio del array de URLs
    const randomIndex = Math.floor(Math.random() * urls.length);

    // Obtiene la URL aleatoria
    const randomURL = urls[randomIndex];

    // Redirige al usuario a la URL aleatoria
    window.location.href = randomURL;
});