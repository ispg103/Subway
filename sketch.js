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

const app = p5 => {
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

p5.setup = function() {
  p5.createCanvas(393, 760);

  home = new Home(p5,()=>{
    currentScreen.hideInput();
    currentScreen=home2;
  });

  home2 = new Home2(p5,()=>{
    currentScreen.hideInput();
    currentScreen=userInfo;
  });

  userInfo=new UserInfo(p5,()=>{
    currentScreen.hideInput();
    currentScreen=bread;
  });

  bread = new Bread(p5,()=>{
    currentScreen.hideInput();
    currentScreen=meats;
  });

  meats = new Meats(p5,()=>{
    currentScreen.hideInput();
    currentScreen=cheese;
  });

  cheese = new Cheese(p5,()=>{
    currentScreen.hideInput();
    currentScreen=vegetables;
  });

  vegetables = new Vegetables(p5,()=>{
    currentScreen.hideInput();
    currentScreen=sauces;
  });

  sauces = new Sauces(p5,()=>{
    currentScreen.hideInput();
    currentScreen=scores;
  });

  scores = new Scores(p5,()=>{
    currentScreen.hideInput();
    currentScreen=sorry;
  });

  sorry=new Sorry(p5,()=>{
    currentScreen.hideInput();
    currentScreen=thanks;
  });

  congrats=new Congrats(p5,()=>{
    currentScreen.hideInput();
    currentScreen=thanks;
  });

  thanks=new Thanks(p5,()=>{
    currentScreen.hideInput();
    currentScreen=home;
  });

  currentScreen = home;

};

p5.draw = function() {
  p5.background(0);
  currentScreen.show(p5);

  `if (p5.keyIsPressed) {
    if (p5.key === '1') {
      currentScreen.hideInput();
      currentScreen = home2;
      console.log("Cambio a 1")
    } else if (p5.key === '2') {
      currentScreen.hideInput();
      currentScreen = userInfo;
      console.log("Cambio a 2")
    }else if (p5.key === '3') {
      currentScreen.hideInput();
      currentScreen = bread;
      console.log("Cambio a 3")
    }else if (p5.key === '4') {
      currentScreen.hideInput();
      currentScreen = meats;
      console.log("Cambio a 4")
    }else if (p5.key === '5') {
      currentScreen.hideInput();
      currentScreen = cheese;
      console.log("Cambio a 5")
    }else if (p5.key === '6') {
      currentScreen.hideInput();
      currentScreen = vegetables;
      console.log("Cambio a 6")
    }else if (p5.key === '7') {
      currentScreen.hideInput();
      currentScreen = sauces;
      console.log("Cambio a 7")
    }else if (p5.key === '8') {
      currentScreen.hideInput();
      currentScreen = scores;
      console.log("Cambio a 8")
    }
    else if (p5.key === '9') {
      currentScreen.hideInput();
      currentScreen = sorry;
      console.log("Cambio a 9")
    }
    else if (p5.key === '0') {
      currentScreen.hideInput();
      currentScreen = congrats;
      console.log("Cambio a 0")
    }
    else if (p5.key === '+') {
      currentScreen.hideInput();
      currentScreen = thanks;
      console.log("Cambio a +")
    }
  }`
};

}

new p5(app);
