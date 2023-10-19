import { Home } from "./screens/home.js";
import { UserInfo } from "./screens/userInfo.js";
import { Bread } from "./screens/bread.js";
let home;
let userInfo;
let bread;

const app = p5 => {
  const bread = new Bread(p5);

  p5.setup = function() {
    p5.createCanvas(700, 850);
  };

  p5.draw = function() {
    p5.background(220);
    bread.show(p5);
  };

};

new p5(app);
