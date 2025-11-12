import { productos } from "./productos.js";
//import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el contenedor
  const contenedor = document.querySelector(".contenedor-tarjetas");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  // Genera las tarjetas con la referencia al HTML
  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");
    tarjeta.innerHTML = `
      <a href="${producto.link}">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <h3 class="h3">${producto.nombre}</h3>
      </a>
    `;

    //Una vez creado, se agrega al contenedor
    contenedor.appendChild(tarjeta);
  });
});
