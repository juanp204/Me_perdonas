let forgiveScaleFactor = 1.0; // Factor de escala inicial para el botón verde

function forgive() {
    alert("Yo sabía que me ibas a perdonar. Te quiero mucho. Eres lo mejor que me ha pasado.");
    document.body.style.backgroundColor = "#fce4ec"; /* Cambio de fondo a rosa claro */
    document.querySelector(".container").innerHTML = '<h1>¡Te quiero!</h1><p>¡Eres increíble!</p><img src="./heart-png.webp" style="width: 30%;" alt="corazon">';
}

function notForgive() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = document.querySelector(".not-forgive").offsetWidth;
    const buttonHeight = document.querySelector(".not-forgive").offsetHeight;

    let randomX, randomY;
    let overlap = true;

    while (overlap) {
        randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
        randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

        // Verificar si el nuevo lugar generado para el botón rojo se superpone con el área ocupada por el botón verde
        const forgiveRect = document.querySelector(".forgive").getBoundingClientRect();
        const notForgiveRect = {left: randomX, top: randomY, right: randomX + buttonWidth, bottom: randomY + buttonHeight};

        if (notForgiveRect.right < forgiveRect.left || 
            notForgiveRect.left > forgiveRect.right || 
            notForgiveRect.bottom < forgiveRect.top || 
            notForgiveRect.top > forgiveRect.bottom) {
            overlap = false; // No hay superposición, por lo que la posición es válida
        }
    }

    document.querySelector(".not-forgive").style.position = "absolute";
    document.querySelector(".not-forgive").style.top = randomY + "px";
    document.querySelector(".not-forgive").style.left = randomX + "px";

    forgiveScaleFactor += 0.5; // Incrementar el factor de escala para el botón verde
    document.querySelector(".forgive").style.transform = "scale(" + forgiveScaleFactor + ")";
    document.querySelector(".forgive").style.transformOrigin = "center"; // Establecer el origen de la transformación en el centro del botón verde
}
