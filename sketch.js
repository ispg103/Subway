import { Home } from "./screens/home.js";
import { UserInfo } from "./screens/userInfo.js";
import { Bread } from "./screens/bread.js";
let home;
let userInfo;
let bread;

const app = p5 => {
  const userInfo = new UserInfo(p5);

  p5.setup = function() {
    p5.createCanvas(393, 715);
  };

  p5.draw = function() {
    p5.background(220);
    userInfo.show(p5);
  };

};

new p5(app);
