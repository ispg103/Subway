//Crear el socket
let socket = io();
import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
import { Start } from './screens/start.js';
import { QR } from './screens/QR.js';
import { Charging } from './screens/charging.js'
import { Bread } from './screens/bread.js';
import { Cheese } from './screens/cheese.js';
import { Meats } from './screens/meats.js';
import { Vegetables } from './screens/vegetables.js';
import { Sauces } from './screens/sauces.js';

let users = {
  email: "",
  score:0,
};

const app = (p5) => {
  let start;
  let qr;
  let charging;
  let bread;
  let cheese;
  let meats;
  let vegetables;
  let sauces;
  let currentScreen;

  //Timer
  let startingTime = 60;// el timer empezara desde 60 segundos
  let lastUpdateTime = 0;
  let currentDisplayTime = startingTime; // Tiempo que se muestra actualmente
  let timeStarted = false; //indica si el temporizador ya esta activo
  let timerVisible = false; // Controla la visibilidad del temporizador

  let selectedIngredients = [];

  p5.setup = function () {
    p5.createCanvas(676, 986);


    // Obtener el ancho y alto de la ventana del navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcular las coordenadas X e Y del centro de la pantalla
    const centerX = windowWidth / 2 - p5.width / 3;
    const centerY = windowHeight / 2 - p5.height / 3;

    // Posicionar el canvas en el centro de la pantallas
    p5.canvas.style.position = 'absolute';
    p5.canvas.style.left = `${centerX}px`;
    p5.canvas.style.top = `${centerY}px`;

    socket = io.connect('http://localhost:3000', { path: '/real-time' });
    socket.emit("mupi-connected");


    start = new Start(p5)

    qr = new QR(p5)

    charging= new Charging(p5)

    bread= new Bread(p5),

    cheese=new Cheese(p5);

    meats=new Meats(p5);

    vegetables=new Vegetables(p5);

    sauces=new Sauces(p5);


    //CAMBIAR DESDE AQUI
    currentScreen = start;






    socket.on('users-data', (data) => {
      users = data
      console.log(users)

    });

    // Actualizar puntaje del usuario
    socket.on('update-score-users', (winner) => {
      if (users.email === winner.email) {
        users.score = winner.score;
        console.log("Puntaje del usuario:", users.score);
        updateUserRanking(); //Llamando la función actualizar raanking
      }
    } );

    //Actualizar raanking
    function updateUserRanking(){

    }



    socket.on('screen-change', () => {
    currentScreen = qr;

    });

    //socket.on('go-to-main-screen', () => {
    //currentScreen = scoreScreen;

    //});

    socket.on('start-timer', () => {
    if (!timeStarted && currentScreen === scoreScreen) {
    timeStarted = true;
    console.log("Comienza el temporizador");
    }
    });


    /*function probarMandarDatos() {
      if (dist() < size) {
          console.log("aqui toy")
          socket.emit('confirmation', "aqui toy")
          console.log("ha sido enviado exitosamente")
      }
    };*/
  };

    //ESTA WEA HACE QUE IMPRIMA
    p5.draw = function () {
      p5.background(0);
      currentScreen.show(p5); // PARA VER LAS PANTALLAS CAMBIAR EL(start)
    };
  };

new p5(app);
