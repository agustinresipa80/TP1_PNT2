const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenados);

const mensajes = productos.map(p => 
  `El producto ${p.nombre} cuesta $${p.precio} y pertenece a la categoría ${p.categoria}.`
);

console.log(mensajes);

const nuevosProductos = [
  { id: 6, nombre: "Medias", precio: 800, categoria: "Ropa" },
  { id: 7, nombre: "Cinturón", precio: 2000, categoria: "Accesorios" }
];

const todos = [...productos, ...nuevosProductos];
console.log(todos);