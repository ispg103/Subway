export class Charging {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
    this.oven = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/Oven.png');
    this.vector1 = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/Vector1.png');
    this.vector2 = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/Vector2.png');
    this.text = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Cooking your creation!.png');

`   this.next.mousePressed(() => {
      navigateCallback();
    });

    this.hideInput();`
  }

  show(p5) {
    p5.background('green');
    p5.image(this.logo, 145, 170);
    p5.image(this.oven, 150, 430);
    p5.image(this.vector1, 110, 719);
    p5.image(this.vector2, 0, 0);
    p5.image(this.text, 110, 320);
    //this.next.show();
  }

  hideInput() {
    this.next.hide();
  }

  showInput() {
    this.next.show();
  }

}