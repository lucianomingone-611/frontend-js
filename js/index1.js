import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  productos.forEach((producto) => {
    //Creo el artículo
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");
    //tarjeta.innerHTML = `
    //<a href="${producto.link}">
    //  <img src="${producto.img}" alt="${producto.nombre}" />
    //  <h3 class="h3">${producto.nombre}</h3>
    //</a>
    //`;

    //Creo la imagen del artículo
    const img = document.createElement("img");
    img.src = `./${producto.img}`;
    img.alt = producto.nombre;

    //Creo el título del artículo
    const titulo = document.createElement("h3");
    titulo.classList.add("titulo-producto");
    titulo.textContent = producto.nombre;

    //Creo el vinculo al HTML
    //const enlace = document.getElementById("html");
    //enlace.href = "producto.html";

    //Creo el precio del artículo
    //const precio = document.createElement("p");
    //precio.classList.add("precio-producto");
    //precio.textContent = `$${producto.precio}`;

    //const boton = document.createElement("button");
    //boton.classList.add("btn");
    //boton.textContent = "Agregar al carrito";

    //boton.addEventListener("click", () => {
    //  agregarAlCarrito(producto);

    //Aca se crea el artículo con todo lo anterior
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    //tarjeta.appendChild(precio);
    //tarjeta.appendChild(boton);

    //Una vez creado, se agrega al contenedor
    contenedor.appendChild(tarjeta);
  });
});
