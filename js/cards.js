// Obtén los elementos
var modal = document.getElementById("miModal");
var card = document.getElementById("miCard");
var span = document.getElementsByClassName("cerrar")[0];

// Cuando se haga clic en la tarjeta, muestra el modal y desactiva el scroll
card.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
}

// Cuando se haga clic en el <span> (x), cierra el modal y activa el scroll
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
}

// Cuando se haga clic fuera del modal, ciérralo y activa el scroll
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}
// Obtén los elementos
var modal = document.getElementById("miModal");
var card = document.getElementById("miCard");
var span = document.getElementsByClassName("cerrar")[0];

// Cuando se haga clic en la tarjeta, muestra el modal, desactiva el scroll e inicia el juego de Tetris
card.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
    iniciarTetris(); // Iniciar el juego automáticamente
}

// Cuando se haga clic en el <span> (x), cierra el modal, activa el scroll y detiene el juego de Tetris
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
    pararTetris(); // Detener el juego automáticamente
}

// Cuando se haga clic fuera del modal, ciérralo, activa el scroll y detiene el juego de Tetris
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
        pararTetris(); // Detener el juego automáticamente
    }
}

