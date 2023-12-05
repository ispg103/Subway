export class QR {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
    this.qr = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/QR.png');
    this.vector1 = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/Vector1.png');
    this.vector2 = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/Vector2.png');
    this.textQR = this.p5.loadImage('./SUBWAY FOTOS/TITLES/ScanQR.png');
    this.next = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/NextIcon2.png');

`   this.next.mousePressed(() => {
      navigateCallback();
    });

    this.hideInput();`
  }

  show(p5) {
    p5.background('green');
    p5.image(this.logo, 145, 170);
    p5.image(this.qr, 150, 410);
    p5.image(this.vector1, 110, 719);
    p5.image(this.vector2, 0, 0);
    p5.image(this.textQR, 130, 320);
    p5.image(this.next, 290, 800);
    //this.next.show();
  }

  hideInput() {
    this.next.hide();
  }

  showInput() {
    this.next.show();
  }

}