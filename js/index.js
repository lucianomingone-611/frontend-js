import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el contenedor
  const contenedor = document.getElementById("contenedor-tarjetas");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  fetch("./data/productos.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error HTTP status: ${res.status}`);
      }

      return res.json();
    })

    .then((data) => {
      data.forEach((producto) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
});
