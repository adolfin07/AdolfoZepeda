// Variables y declaraciones
let counter = 0;
const PI = 3.14159;
let randomArray = [42, "hello", true, null, { key: "value" }];
var greeting = "Welcome to JavaScript";

// Funciones simples
function addNumbers(a, b) {
  return a + b;
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Operaciones con arrays
randomArray.push("new element");
randomArray.forEach((item, index) => {
  console.log(`Item ${index}:`, item);
});

// Manipulación del DOM
let button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Generar números aleatorios
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Bucles
for (let i = 0; i < 10; i++) {
  console.log(`Iteration ${i}`);
}

while (counter < 5) {
  console.log(`Counter is at: ${counter}`);
  counter++;
}

// Objetos y métodos
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greet();

// Promesas y temporizadores
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

fetchData().then((data) => console.log(data));

// Condicionales
if (PI > 3) {
  console.log("PI is greater than 3.");
} else {
  console.log("PI is less than or equal to 3.");
}

// Clase simple
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let myRectangle = new Rectangle(5, 10);
console.log(`Area of rectangle: ${myRectangle.area()}`);

// Más DOM
let div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "blue";
document.body.appendChild(div);

div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "red";
});

div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "blue";
});

// Uso de Map
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// Fechas
let now = new Date();
console.log(`Current date and time: ${now}`);

// Más funciones
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(`Factorial of 5: ${factorial(5)}`);

// JSON
let jsonData = JSON.stringify({ name: "Alice", age: 25 });
console.log(`JSON Data: ${jsonData}`);

let parsedData = JSON.parse(jsonData);
console.log(`Parsed Data:`, parsedData);

// Set
let uniqueNumbers = new Set([1, 2, 3, 3, 4]);
console.log(`Set size: ${uniqueNumbers.size}`);

// Generadores
function* numberGenerator() {
  let i = 1;
  while (i <= 5) {
    yield i++;
  }
}

const gen = numberGenerator();
for (let num of gen) {
  console.log(num);
}

// Fetch API (simulado)
function simulateFetch(url) {
  console.log(`Fetching from ${url}...`);
  setTimeout(() => {
    console.log("Data received!");
  }, 1000);
}

simulateFetch("https://api.example.com");

// LocalStorage
localStorage.setItem("username", "Guest");
console.log(`Username: ${localStorage.getItem("username")}`);

// Eventos del teclado
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// CSS dinámico
div.style.border = "5px solid black";

// Aleatorizar un array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

// Finalizar con una despedida
console.log("End of 150 lines of random JavaScript!");


var bgFixed = document.getElementById('backspan');
var header = document.getElementById('header');

document
  .getElementById("change-theme-website")
  .addEventListener("click", () => {
    const i = document.querySelector("#change-theme-website i");
    const root = document.documentElement;

    function DarkMode() {
      root.style.setProperty("--background", "#141414");
      root.style.setProperty("--hover", "#161616");
      root.style.setProperty("--color", "white");
      root.style.setProperty("--border", "solid 1px rgb(26, 26, 26)");
      root.style.setProperty("--shadow", "0px 3px 10px #272727");
      root.style.setProperty("--box-shadow", "2px 2px 4px 0px #eee");
      bgFixed.style.background = '#141414';
    }

    function LightMode() {
      root.style.setProperty("--background", "#fafafa");
      root.style.setProperty("--hover", "#f5f5f5");
      root.style.setProperty("--color", "black");
      root.style.setProperty("--border", "solid 1px #141414");
      root.style.setProperty("--box-shadow", "2px 2px 4px 0px #141414");
      bgFixed.style.background = ' rgb(235, 235, 235)';

    }

    i.classList.toggle("fa-moon");
    i.classList.toggle("fa-sun");

    i.className.replace("fa-solid ", "") === "fa-sun"
      ? LightMode()
      : DarkMode();
  });

//vertical observer

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var openBtn = document.getElementById('barsBtn');
var closeBtn = document.getElementById('xBtn');
var header = document.getElementById('header');

openBtn.addEventListener('click', () => {

  header.classList.add('openNav');
  header.classList.remove('closeNav');
  console.log('open clicked');

  openBtn.style.display = "none";
  closeBtn.style.display = "block";

});


closeBtn.addEventListener('click', () => {

  header.classList.add('closeNav')
  header.classList.remove('openNav');
  console.log('closed clicked');

  openBtn.style.display = "block";
  closeBtn.style.display = "none";

});


