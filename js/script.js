const botonMenu = document.querySelector(".hamb");

const menu = document.querySelector("#menu-principal");
const icono = document.querySelector("i");

function establecerMenu(abierto) {
  menu.classList.toggle("open", abierto);
  botonMenu.setAttribute("aria-expanded", String(abierto));
  botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  icono.classList.toggle("fa-bars", !abierto);
  icono.classList.toggle("fa-xmark", abierto);

  botonMenu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
