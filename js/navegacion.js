import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  fetch("../data/navegacion.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error HTTP status: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      data.forEach((velocidad) => {
        //Creo el artículo
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        //Creo la imagen del artículo
        const img = document.createElement("img");
        img.src = `../${velocidad.img}`;
        img.alt = velocidad.nombre;

        //Creo el título del artículo
        const titulo = document.createElement("h3");
        titulo.classList.add("titulo-producto");
        titulo.textContent = velocidad.nombre;

        //Creo el precio del artículo
        const precio = document.createElement("p");
        precio.classList.add("precio-producto");
        precio.textContent = `$${velocidad.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          agregarAlCarrito(velocidad);
        });

        //Aca se crea el artículo con todo lo anterior
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        //Una vez creado, se agrega al contenedor
        contenedor.appendChild(tarjeta);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
