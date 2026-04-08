const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

const nombres = productos.map(p => p.nombre);
console.log(nombres);

const ropa = productos.filter(p => p.categoria === "Ropa");
console.log(ropa);

const caros = productos.filter(p => p.precio > 3000);
console.log(caros);

const gorra = productos.find(p => p.nombre === "Gorra");
console.log(gorra);