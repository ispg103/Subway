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
import { Start } from '../public-display/screens/start.js';
//import { createUser, getUsers } from '../firebase.js';
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

  let selectedIngredients;
  //Timer
  let startingTime = 60;// el timer empezara desde 60 segundos
  let lastUpdateTime = 0;
  let currentDisplayTime = startingTime; // Tiempo que se muestra actualmente
  let timeStarted = false; //indica si el temporizador ya esta activo
  let timerVisible = false; // Controla la visibilidad del temporizador


  p5.setup = function () {
    p5.createCanvas(393, 760);

    //PANTALLAS
    
    home = new Home(p5, () => {
      console.log(userData.attempts);
      currentScreen.hideInput();
      currentScreen = home2;
      console.log("sub daily: ", SubDaily);
      console.log("number of attemps: ", userData.attempts);
    });

    home2 = new Home2(p5, () => {
      currentScreen.hideInput();
      currentScreen = userInfo;
    });

    userInfo = new UserInfo(p5, () => {
      // Obtener el correo electrónico ingresado por el usuario
      let userEmail = userInfo.getEmail();
      console.log('user email:', userEmail)
      currentScreen.hideInput();
      currentScreen = bread;
      console.log("info user data: ", userData);
    });

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
      const emailValue = userInfo.getEmail();

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
      currentScreen = scores;
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
    });

    scores = new Scores(p5, () => {
      console.log(userData)
      currentScreen.hideInput();
      currentScreen = sorry;
      console.log("info user data: ", userData);
    });

    sorry = new Sorry(p5, () => {
      currentScreen.hideInput();
      currentScreen = congrats;
      userData.attemps = userData.attemps - 1;
    });
    
    congrats = new Congrats(p5, () => {
      currentScreen.hideInput();
      currentScreen = thanks;
    });
    
    thanks = new Thanks(p5, () => {
      currentScreen.hideInput();
      currentScreen = home;
    });

    // VER LAS PANTALLAS DESDE AQUI
    currentScreen = home;

    /*async function sendDataToFirebase(userData) {
      try {
        await createUser(userData);
        await getUsers();
        console.log("Datos enviados a Firebase exitosamente");
      } catch (error) {
        console.error("Error al enviar datos a Firebase: ", error);
      }
    }
    */

    async function updateUserData(selectedData) {
      userData.subSelection = {
        selectedBread: selectedData.bread,
        cheese: selectedData.cheese,
        vegetables: selectedData.vegetables,
        meats: selectedData.meats,
        sauces: selectedData.sauces,
      };

      await sendDataToFirebase(userData);
    }
    

    `userInfo = new UserInfo(p5, () => {
      userInfo.setSubmitCallback((userData)=>{
        userData={
          email:"",
          score:0,
        }
        console.log("Email recibido:",userData)
      })
      currentScreen.hideInput();
      currentScreen = bread;
    });`



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

    `  selectRandomIngredients(
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

  /*function probarMandarDatos() {
    if (dist() < size) {
        console.log("aqui toy")
        socket.emit('confirmation', "aqui toy")
        console.log("ha sido enviado exitosamente")
    }
  };*/`
  };

  p5.draw = function () {
    p5.background(0);
    currentScreen.show(p5);
  };

}

new p5(app);

