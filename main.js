// 1. Variables --------------------------------------------

// alert("JavaScript funcionando correctamente");

let variableSinValor;

let booleano1 = true;

let booleano2 = false;

const PI = 3.14;

const TAU = PI * 2;

const miNombre = "Federico";

const miNumeroFav = 22;

let tipoBooleano = true;

console.log(miNombre.length);

console.log(typeof miNumeroFav);

console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}.`);

console.log(
  "Seré un crack en JavaScript al terminar el bootcamp.".toLocaleUpperCase()
);

const variable = "Hola soy un crack";

console.log(variable.substring(0, 5));

let convertToString = miNumeroFav.toString();

console.log(typeof convertToString);

const deporteFav = "MotoGP";

const mensajeDerporteFav = `Me gustan las motos y soy Fan de ${deporteFav}.`;

console.log(mensajeDerporteFav);

let conDecimal = PI.toFixed(2);

console.log(conDecimal);

// 2. Arrays --------------------------------------------

const arrayVacio = [];

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayNumerosPares = [0, 2, 4, 6, 8];

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const holaMundo = ["Hola", "Mundo"];

const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "dirección"],
];

console.log(loGuardoTodo.length);

loGuardoTodo.push("newElement");

console.log(loGuardoTodo[5]);

console.log(loGuardoTodo[1]);

loGuardoTodo.firstName = "Euralio";

console.log(loGuardoTodo.firstName);

// 3. Objetos --------------------------------------------

let coche = {
  marca: "Audi",
  modelo: "TT",
  matrícula: "1234 ABC",
};

let casa = {
  codPostal: 46001,
  calle: "Pasaje Giner",
  portal: 6,
  piso: 3,
};

let fullStackDeveloper = {
  lenguajes: ["javascript", "php", "python"],
  proyectos: ["Mi página personal", "Market Place"],
};

let perro = {
  nombre: "Domingo",
  raza: "Dalmata",
  color: "Blanco y Negro",
  edad: 10,
};

let noticia = {
  titular: "Estudiá Full Stack Developer",
  cuerpo:
    "Alcanza el éxito profesional y personal, fórmate en Desarrollo Web FullStack en The Bridge.",
};

let persona = {
  nombre: "Federico",
  apellidos: "Arévalo",
  edad: 34,
};

console.log(persona.nombre);

console.log(fullStackDeveloper.lenguajes[0]);

let portatil = {
  marca: "Acer",
};

console.log(portatil.marca);

let concierto = {
  grupos: ["Rolling Stones", "U2"],
};

console.log(concierto.grupos);

let led = {
  rojo: "Rojo",
  verde: "Verde",
  azul: "Azul",
};

const RGB = Object.values(led);

console.log(RGB);

let O_Error = {
  codigo: "Código de error n° 3625",
};

console.log(O_Error.codigo);

let grupo = {
  integrantes: ["Nick", "Pepe", "John"],
};

let integrantes = grupo.integrantes;

console.log(grupo.integrantes[2]);

let impresora = {
  tinta: { rojo: 80, verde: 50, azul: 30 },
};

const nivelesTinta = impresora.tinta;

console.log(nivelesTinta);

let movil = {
  especificaciones: "240 GB",
};

let especificaciones = movil.especificaciones;

console.log(especificaciones);

portatil.marca = "MSI";

console.log(portatil.marca);

concierto.grupos.push("Guns N' Roses");

console.log(concierto.grupos);

concierto.fecha = "1/2/2022";

console.log(concierto.fecha);

concierto.fecha = new Date();

console.log(concierto.fecha.toLocaleDateString());

grupo.integrantes.pop();

console.log(grupo.integrantes.length);
