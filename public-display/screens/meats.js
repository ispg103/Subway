  export class Meats {
    constructor(p5, navigateCallback) {
      this.p5 = p5;
      this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
      this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Meat_chosen.jpg');
      this.meat = this.p5.loadImage('./SUBWAY FOTOS/MEAT/Jam.png');
      this.bread = this.p5.loadImage('./SUBWAY FOTOS/BREAD/WhiteBread2.png');

      //this.next.mousePressed(()=>{
        //navigateCallback();
      //});

      //this.hideInput();
    }

    show(p5) {
      p5.background('green');
      p5.image(this.logo, 130, 130);
      p5.image(this.choose, 190, 270);
      p5.image(this.bread, 150, 345);
      p5.image(this.meat, 80, 260);
      p5.image(this.meat, 80, 460);
      p5.image(this.meat, 80, 660);



    }


    //hideInput() {
      //this.nextButton.hide();
    //}

    //showInput() {
      //this.nextButton.show();
    //}
  }