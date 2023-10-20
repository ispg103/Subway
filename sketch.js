import { Home } from "./screens/home.js";
import { UserInfo } from "./screens/userInfo.js";
import { Bread } from "./screens/bread.js";
import { Sauces } from "./screens/sauces.js";
import { Vegetables } from "./screens/vegetables.js";
import { Meats } from "./screens/meats.js";
let home;
let userInfo;
let bread;
let sauces;
let vegetables;
let meats;

const app = p5 => {
  const meats = new Meats(p5);

  p5.setup = function() {
    p5.createCanvas(393, 715);
  };

  p5.draw = function() {
    p5.background(220);
    meats.show(p5);
  };

};

new p5(app);
