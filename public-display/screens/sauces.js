  export class Sauces {
    constructor(p5, navigateCallback) {
      this.p5 = p5;
      this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
      this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Sauce_chosen.png');
      this.sauce = this.p5.loadImage('./SUBWAY FOTOS/SAUCE/BBQ.png');

      //this.next.mousePressed(()=>{
        //navigateCallback();
      //});

      //this.hideInput();
    }

    show(p5) {
      p5.background('green');
      p5.image(this.logo, 130, 130);
      p5.image(this.choose, 180, 270);
      p5.image(this.sauce, 150, 260);
      p5.image(this.sauce, 150, 265);
      p5.image(this.sauce, 150, 270);
      p5.image(this.sauce, 150, 275);

    }


    //hideInput() {
      //this.nextButton.hide();
    //}

    //showInput() {
      //this.nextButton.show();
    //}
  }