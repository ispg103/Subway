export class UserInfo{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');

      this.continueButton = this.p5.createButton('Continue');
      this.continueButton.position(this.p5.windowWidth / 7.5 - 50, this.p5.windowHeight / 2 + 250);
      this.continueButton.mousePressed(this.navigate);

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,40,100);
      this.continueButton.show();

    }

    hideInput(){
        this.continueButton.hide();
    }

    showInput(){
        this.continueButton.show();
    }

  }