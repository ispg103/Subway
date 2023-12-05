//Controla a qué servidor se dirigirá un usuario final cuando escriba un nombre de dominio en su navegador web
const DNS = getDNS;

const URL = `http://${window.location.hostname}:3000`;
let socket = io(URL, {
  path: "/real-time",
});

import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
import { Home } from './screens/home.js';
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


let dailySubs = [];
let SubDaily = [];
let user = [];
let selectedIngBread = false;
let selectedIngMeat = false;
let selectedIngCheese = false;
let selectedIngVegetable = false;
let selectedIngSauce = false;



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

  let userData = {
    email: "",
    score: 0,
    attempts: 2,
    subSelection: {
      selectedBread: "",
      selectedCheese: "",
      selectedVegetable: "",
      selectedMeat: "",
      selectedSauce: "",
    },
  };


  p5.setup = function () {
    p5.createCanvas(393, 760);

    //PANTALLAS

    home = new Home(p5, () => {
      currentScreen.hideInput();
      currentScreen = home2;
      console.log("sub daily: ", SubDaily);
      console.log("number of attemps: ", userData.attempts);
    });

    home2 = new Home2(p5, () => {
      currentScreen.hideInput();
      currentScreen = userInfo;
    });

    userInfo = new UserInfo(p5, (emailValue) => {
      console.log('(Recibido en el sketch)Correo electrónico ingresado:', emailValue);
      userData.email = emailValue;
      currentScreen.hideInput();
      currentScreen = bread;
      console.log("info user data: ", userData);
    });

    function compareIngredients() {
      if (
        userData.subSelection.selectedBread === SubDaily.bread &&
        userData.subSelection.selectedMeat === SubDaily.meat &&
        userData.subSelection.selectedCheese === SubDaily.cheese &&
        userData.subSelection.selectedVegetable === SubDaily.vegetables &&
        userData.subSelection.selectedSauce === SubDaily.sauce
      ) {
        currentScreen.hideInput();
        currentScreen = congrats;
      } else {
        currentScreen.hideInput();
        currentScreen = sorry;
        userData.attempts = userData.attempts - 1;
      }
    }

    bread = new Bread(p5, () => {
      currentScreen.hideInput();
      currentScreen = meats;
    }, (selectedBread) => {
      userData.subSelection.selectedBread = selectedBread;
      if (selectedBread === SubDaily.bread && selectedIngBread==false){
        if(userData.attempts = 2){
          userData.score = userData.score + 10;
          console.log("puntaje: ", userData.score);
          selectedIngBread = true;
        }else if(userData.attempts = 1){
          userData.score = userData.score + 5;
          console.log("puntaje: ", userData.score);
          selectedIngBread = true;
        }
      }else if(selectedIngBread==false){
        selectedIngBread = true;
        console.log("eleccion incorrecta , puntaje: ", userData.score);
      }
    });

    meats = new Meats(p5, () => {
      currentScreen.hideInput();
      currentScreen = cheese;
    }, (selectedMeat) => {
      userData.subSelection.selectedMeat = selectedMeat;
      if (selectedMeat === SubDaily.meat && selectedIngMeat==false){
        if(userData.attempts = 2){
          userData.score = userData.score + 10;
          console.log("puntaje: ", userData.score);
          selectedIngMeat = true;
        }else if(userData.attempts = 1){
          userData.score = userData.score + 5;
          console.log("puntaje: ", userData.score);
          selectedIngMeat = true;
        }
      }else if(selectedIngMeat==false){
        selectedIngMeat = true;
        console.log("eleccion incorrecta , puntaje: ", userData.score);
      }
    });

    cheese = new Cheese(p5, () => {
      currentScreen.hideInput();
      currentScreen = vegetables;
    }, (selectedCheese) => {
      userData.subSelection.selectedCheese = selectedCheese;
      if (selectedCheese === SubDaily.cheese && selectedIngCheese==false){
        if(userData.attempts = 2){
          userData.score = userData.score + 10;
          console.log("puntaje: ", userData.score);
          selectedIngCheese = true;
        }else if(userData.attempts = 1){
          userData.score = userData.score + 5;
          console.log("puntaje: ", userData.score);
          selectedIngCheese = true;
        }
      }else if(selectedIngCheese==false){
        selectedIngCheese = true;
        console.log("eleccion incorrecta , puntaje: ", userData.score);
      }
    });

    vegetables = new Vegetables(p5, () => {
      currentScreen.hideInput();
      currentScreen = sauces;
    }, (selectedVegetable) => {
      userData.subSelection.selectedVegetable = selectedVegetable;
      if (selectedVegetable === SubDaily.vegetables && selectedIngVegetable==false){
        if(userData.attempts = 2){
          userData.score = userData.score + 10;
          console.log("puntaje: ", userData.score);
          selectedIngVegetable = true;
        }else if(userData.attempts = 1){
          userData.score = userData.score + 5;
          console.log("puntaje: ", userData.score);
          selectedIngVegetable = true;
        }
      }else if(selectedIngVegetable==false){
        selectedIngVegetable = true;
        console.log("eleccion incorrecta , puntaje: ", userData.score);
      }
    });

    sauces = new Sauces(p5, () => {
      currentScreen.hideInput();
      currentScreen = sorry;
    }, (selectedSauce) => {
      userData.subSelection.selectedSauce = selectedSauce;
      if (selectedSauce === SubDaily.sauce && selectedIngSauce==false){
        if(userData.attempts = 2){
          userData.score = userData.score + 10;
          console.log("puntaje: ", userData.score);
          selectedIngSauce = true;
        }else if(userData.attempts = 1){
          userData.score = userData.score + 5;
          console.log("puntaje: ", userData.score);
          selectedIngSauce = true;
        }
      }else if(selectedIngSauce==false){
        selectedIngSauce = true;
        console.log("eleccion incorrecta , puntaje: ", userData.score);
      }
      compareIngredients();
    });

    sorry = new Sorry(p5, () => {
      currentScreen.hideInput();
      currentScreen = scores;
      userData.attemps = userData.attemps - 1;
    });

    congrats = new Congrats(p5, () => {
      currentScreen.hideInput();
      currentScreen = scores;
    });

    scores = new Scores(p5, () => {
      currentScreen.hideInput();
      currentScreen = thanks;
      console.log("info user data: ", userData);
    });

    thanks = new Thanks(p5, () => {
      currentScreen.hideInput();
      currentScreen = home;
    });

    // VER LAS PANTALLAS DESDE AQUI
    currentScreen = home;


    socket.on('start-timer', () => {
      if (!timeStarted && currentScreen === bread) {
        timeStarted = true;
        console.log("Comienza el temporizador");
      }
    });

    socket.on('get-daily-subs', (firebaseDailySubs) => {
      dailySubs = firebaseDailySubs;
      console.log("daily subs: ", dailySubs);
      GetRandomSubDaily();
    });

    function GetRandomSubDaily(){
      let randomN = Math.floor(Math.random() * dailySubs.length);
      SubDaily = dailySubs[randomN];
      console.log("sub daily: ", SubDaily);
    }

    //Actualizar el puntaje
    socket.on('updateScore', (winnerUser) => {
      const currentUserEmail = user.email;

      if (winnerUser.email === currentUserEmail) {
        user.score = winnerUser.score;
        console.log("sirve!");
      }

      console.log("ojala sirva");
      //Capaz hay que crear otra función para diferenciarlo dentro del ranking o tal vez no (La esquizofrenia me esta consumiendo TT) ATT: Lau
    });

    // Crear funcion de ganador


    //Crear funcion de perdedor
    // Controlador principal

  };

  p5.draw = function () {
    p5.background(0);
    currentScreen.show(p5);
  };

}

new p5(app);

