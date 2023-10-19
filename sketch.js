import { Home } from "./screens/home.js";
let home;

const app = p5 => {
  const home = new Home(p5);

  p5.setup = function() {
    p5.createCanvas(700, 850);
  };

  p5.draw = function() {
    p5.background(220);
    home.show(p5);
  };
};

new p5(app);
