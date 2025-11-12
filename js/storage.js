//Este archivo lo que hace es manipular el localStorage, subir o bajar la data del carrito

const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //Convertimos a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //convertimos a js para obtener los datos con parse.
  //le pedimos al localStorage el carrito, y si no lo tiene, que traiga el vacío
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
