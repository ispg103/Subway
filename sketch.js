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

const app = p5 => {
  const thanks= new Thanks(p5);

  p5.setup = function() {
    p5.createCanvas(393, 715);
  };

  p5.draw = function() {
    p5.background(220);
    thanks.show(p5);
  };

};

new p5(app);
