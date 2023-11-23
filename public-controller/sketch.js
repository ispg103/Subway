const socket = io();
import {io} from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
import { Home } from "./screens/home.js";
import { Home2 } from "./screens/home2.js";
import { UserInfo } from "./screens/userInfo.js";
import { Bread } from "./screens/bread.js";
import { Sauces } from "./screens/sauces.js";
import { Vegetables } from "./screens/vegetables.js";
import { Meats } from "./screens/meats.js";
import { Cheese } from "./screens/cheese.js";
import { Scores } from "./screens/scores.js";
import { Sorry } from "./screens/sorry.js";
import { Congrats } from "./screens/congrats.js";
import { Thanks } from "./screens/thanks.js";
//import {getRandomFromDB} from './firebase.js';
let user = [];

const app = (p5) => {
  let home;
  let home2;
  let userInfo;
  let bread;
  let sauces;
  let vegetables;
  let meats;
  let cheese;
  let scores;
  let sorry;
  let congrats;
  let thanks;
  let currentScreen;

  //Timer
  let startingTime = 60;// el timer empezara desde 60 segundos
  let lastUpdateTime = 0;
  let currentDisplayTime = startingTime; // Tiempo que se muestra actualmente 
  let timeStarted = false; //indica si el temporizador ya esta activo
  let timerVisible = false; // Controla la visibilidad del temporizador

  let selectedIngredients = [];

  p5.setup = function() {
    p5.createCanvas(393, 760);

    socket = io.connect('http://localhost:3000', {path: '/real-time'});
    socket.emit("mupi-connected");

    home = new Home(p5, () => {
      currentScreen.hideInput();
      currentScreen = home2;
    });

    home2 = new Home2(p5, () => {
      currentScreen.hideInput();
      currentScreen = userInfo;
    });

    userInfo = new UserInfo(p5, () => {
      currentScreen.hideInput();
      currentScreen = bread;
    });

    bread = new Bread(p5, () => {
      currentScreen.hideInput();
      currentScreen = meats;
    });

    meats = new Meats(p5, () => {
      currentScreen.hideInput();
      currentScreen = cheese;
    });

    cheese = new Cheese(p5, () => {
      currentScreen.hideInput();
      currentScreen = vegetables;
    });

    vegetables = new Vegetables(p5, () => {
      currentScreen.hideInput();
      currentScreen = sauces;
    });

    sauces = new Sauces(p5, () => {
      currentScreen.hideInput();
      currentScreen = scores;
    });

    scores = new Scores(p5, () => {
      currentScreen.hideInput();
      currentScreen = sorry;
    });

    sorry = new Sorry(p5, () => {
      currentScreen.hideInput();
      currentScreen = thanks;
    });

    congrats = new Congrats(p5, () => {
      currentScreen.hideInput();
      currentScreen = thanks;
    });

    thanks = new Thanks(p5, () => {
      currentScreen.hideInput();
      currentScreen = home;
    });

    currentScreen = home;

    selectRandomIngredients(
      bread.breadItems,
      cheese.cheeseItems,
      vegetables.vegetables,
      meats.meats,
      sauces.sauces
    );

    socket.on('users-data', (data) => {
      user = data
      console.log(user)

    });
    
    //socket.on('update-score-player', (winner) => {
      //if(players.player1.id == winner.id){
        //players.player1.score = winner.score
        //console.log("score", players.player1.score)
      //} else if (players.player2.id == winner.id) {
        //players.player2.score = winner.score
        //console.log("score", players.player2.score)
      //}
      //console.log(players)

    //});
    
    //socket.on('screen-change', () => {
      //currentScreen = playersScreen;

    //});

    //socket.on('go-to-main-screen', () => {
        //currentScreen = scoreScreen;

    //});

    //socket.on('start-timer', () => {
      //if (!timeStarted && currentScreen === scoreScreen) {
          //timeStarted = true;
          //console.log("Comienza el temporizador");
      //}
  //});

  
    function selectRandomIngredients(breadItems, cheeseItems, vegetables, meats, sauces) {
      function selectRandomItems(array, n) {
        const selectedItems = [];
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0 && selectedItems.length < n; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          selectedItems.push(shuffled[i]);
        }
        return selectedItems;
      }

      const randomBread = breadItems[Math.floor(Math.random() * breadItems.length)]?.name || 'No definido';
      const randomCheese = cheeseItems[Math.floor(Math.random() * cheeseItems.length)]?.name || 'No definido';
      const randomVegetables = vegetables[Math.floor(Math.random() * vegetables.length)]?.name || 'No definido';
      //const randomVegetables = selectRandomItems(vegetables, 2).map(item => item?.name || 'No definido'); Varios Vegetales
      const randomMeat = meats[Math.floor(Math.random() * meats.length)]?.name || 'No definido';
      //const randomSauces = selectRandomItems(sauces, 2).map(item => item?.name || 'No definido');varias salsa
      const randomSauces = sauces[Math.floor(Math.random() * sauces.length)]?.name || 'No definido';

      console.log("Ingredients:");
      console.log("Bread:", randomBread);      
      console.log("Meat:", randomMeat);
      console.log("Cheese:", randomCheese);
      console.log("Vegetable:", randomVegetables);
      console.log("Sauces:", randomSauces);
  };

  p5.draw = function() {
    p5.background(0);
    currentScreen.show(p5);
  };

  /*function probarMandarDatos() {
    if (dist() < size) {
        console.log("aqui toy")
        socket.emit('confirmation', "aqui toy")
        console.log("ha sido enviado exitosamente")
    }
  };*/
};

}

new p5(app);
