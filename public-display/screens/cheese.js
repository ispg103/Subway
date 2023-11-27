  export class Cheese {
    constructor(p5, navigateCallback) {
      this.p5 = p5;
      this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
      this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Cheese_chosen.png');
      this.cheese = this.p5.loadImage('./SUBWAY FOTOS/CHEESE/ProvoloneCheese.png');

      //this.next.mousePressed(()=>{
        //navigateCallback();
      //});

      //this.hideInput();
    }

    show(p5) {
      p5.background('green');
      p5.image(this.logo, 130, 130);
      p5.image(this.choose, 160, 270);
      p5.image(this.cheese, 150, 260);

    }


    //hideInput() {
      //this.nextButton.hide();
    //}

    //showInput() {
      //this.nextButton.show();
    //}
  }