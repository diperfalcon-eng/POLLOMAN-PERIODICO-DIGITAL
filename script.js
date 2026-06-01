document.addEventListener("DOMContentLoaded", function () {
    const botonHamburguesa = document.querySelector(".menu-movil-v3");
    const menuNavegacion = document.querySelector(".nav-v3");

    if (botonHamburguesa && menuNavegacion) {
        botonHamburguesa.addEventListener("click", function () {
            menuNavegacion.classList.toggle("show");
        });
    }
});