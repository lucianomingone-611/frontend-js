import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

//Agregar productos al carrito
export const agregarAlCarrito = (producto) => {
  //usamos la funcion que pide el carrito al localStorage
  const carrito = obtenerCarrito();
  carrito.push(producto);

  //usamos la funcion que guarda el carrito en el localStorage
  guardarCarrito(carrito);

  //Usamos la funcion UI que actualiza en numero en carrito
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado al carrito");
};

//Eliminar productos del carrito
export const eliminarProducto = (indice) => {
  //Usamos la funcion que pide el carrito al localStorage
  const carrito = obtenerCarrito();
  //se le dice al carrito, cuantos elementos se quieren afectar(en esta caso, 1)
  carrito.splice(indice, 1);

  //actualizamos el carrito en el localStorage
  guardarCarrito(carrito);

  //Actualizamos el contador
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado");
};

//Vaciar el carrito
export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Carrito vaciado");
};
