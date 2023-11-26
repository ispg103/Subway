class CheeseItem {
    constructor(image, text) {
      this.image = image;
      this.text = text;
    }
  }
  
  export class Cheese {
    constructor(p5, navigateCallback) {
      this.p5 = p5;
      this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Bread_chosen.png');
      this.cheese = this.p5.loadImage('./SUBWAY FOTOS/CHEESE/ProvoloneCheese.png');

      //this.next.mousePressed(()=>{
        //navigateCallback();
      //});
  
      //this.hideInput();
    }
  
    show(p5) {
      p5.background('green');
      p5.image(this.logo, 65, 75);
      p5.image(this.choose, 55, 140);
      p5.image(this.cheese, 150, 260);
  
    }
  
  
    //hideInput() {
      //this.nextButton.hide();
    //}
  
    //showInput() {
      //this.nextButton.show();
    //}
  }