const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

const hayMayor10000 = productos.some(p => p.precio > 10000);
console.log(hayMayor10000);

const todosMayor1000 = productos.every(p => p.precio > 1000);
console.log(todosMayor1000);

console.log(nombres.includes("Campera"));