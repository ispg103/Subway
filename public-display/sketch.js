//Controla a qué servidor se dirigirá un usuario final cuando escriba un nombre de dominio en su navegador web
const DNS = getDNS;

const URL = `http://${window.location.hostname}:3000`;
let socket = io(URL, {
  path: "/real-time",
});


//import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
import { Start } from './screens/start.js';
import { QR } from './screens/QR.js';
import { Charging } from './screens/charging.js'
import { Bread } from './screens/bread.js';
import { Cheese } from './screens/cheese.js';
import { Meats } from './screens/meats.js';
import { Vegetables } from './screens/vegetables.js';
import { Sauces } from './screens/sauces.js';
import { Done } from './screens/done.js';

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
  let done;
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


    start = new Start(p5)

    qr = new QR(p5)

    charging= new Charging(p5)

    bread= new Bread(p5),

    meats=new Meats(p5);

    cheese=new Cheese(p5);

    vegetables=new Vegetables(p5);

    sauces=new Sauces(p5);

    done=new Done(p5);


    //CAMBIAR DESDE AQUI
    currentScreen = start
    ; // PARA VER LAS PANTALLAS CAMBIAR EL(start)

  };
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

//--------------------------------------------------------------


socket.on('connect',function(){
  console.log('Conectado al servidor') // ESTO CONFIRMA QUE ESTA CONECTADO AL SERVIDOR
})

// SOCKET CAMBIO PANTALLA MUPI

setTimeout(() => {
  currentScreen = qr; // Cambiar a la pantalla QR después de 5 segundos
  console.log('Cambiando a pantalla qr')
  p5.redraw(); // Actualizar el lienzo
}, 5000);

    //socket.on('start-timer', () => {
    //if (!timeStarted && currentScreen === scoreScreen) {
    //timeStarted = true;
    //console.log("Comienza el temporizador");
    //}
   // });

//----------------------------------------------------

    /*function probarMandarDatos() {
      if (dist() < size) {
          console.log("aqui toy")
          socket.emit('confirmation', "aqui toy")z
          console.log("ha sido enviado exitosamente")
      }
    };*/


    //ESTA WEA HACE QUE IMPRIMA
    p5.draw = function () {
      p5.background(0);
      if (currentScreen) {
        currentScreen.show(p5, users); // Renderizar la pantalla actual
      } else {
        console.log('No hay pantalla seleccionada');
      }
    };
  };



new p5(app);
