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

  let selectedIngredients = [];


  p5.setup = function() {
    p5.createCanvas(393, 760);

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

      const selectedIngredient = {
        Bread: randomBread,
        Meat: randomMeat,
        Cheese: randomCheese,
        Vegetable: randomVegetables,
        Sauces: randomSauces,
      };
    
      selectedIngredients.push(selectedIngredient);

      console.log("All Selected Ingredients:");
      console.log(selectedIngredients);
    
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

};

}

new p5(app);