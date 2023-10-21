import { Home } from "./screens/home.js";
import { Home2 } from "./screens/home2.js";
import { UserInfo } from "./screens/userInfo.js";
import { Bread } from "./screens/bread.js";
import { Sauces } from "./screens/sauces.js";
import { Vegetables } from "./screens/vegetables.js";
import { Meats } from "./screens/meats.js";
import { Cheese } from "./screens/cheese.js";
import { Scores } from "./screens/scores.js";

let home;
let home2;
let userInfo;
let bread;
let sauces;
let vegetables;
let meats;
let cheese;
let scores;

const app = p5 => {
  const home2= new Home2(p5);

  p5.setup = function() {
    p5.createCanvas(393, 715);
  };

  p5.draw = function() {
    p5.background(220);
    home2.show(p5);
  };

};

new p5(app);
