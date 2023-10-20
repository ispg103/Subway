export class UserInfo{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.email =this.p5.loadImage('../SUBWAY FOTOS/TITLES/email.png');
      this.coupon =this.p5.loadImage('../SUBWAY FOTOS/TITLES/coupon.png');

      this.continueButton = this.p5.createButton('Continue');
      this.continueButton.position(this.p5.windowWidth / 10 - 87, this.p5.windowHeight / 2 + 250);
      this.continueButton.mousePressed(this.navigate);

      this.emailInput = this.p5.createInput();
      this.emailInput.position(this.p5.windowWidth / 11 - 100, this.p5.windowHeight / 6 + 220);
      this.emailInput.attribute('placeholder', 'Email');

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.email,55,170);
        p5.image(this.coupon,55,520);
      this.continueButton.show();
      this.emailInput.show();

      this.continueButton.style('background-color', '#F3B90C');
      this.continueButton.style('color', '#003308');
      this.continueButton.style('font-size', '29px');
      this.continueButton.style('width', '249px');
      this.continueButton.style('height', '50px');
      this.continueButton.style('border-radius', '39.5px');
      this.continueButton.style('border', 'none');
      this.continueButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');


      this.emailInput.style('background-color', '#FFFFFF');
      this.emailInput.style('color', '#003308');
      this.emailInput.style('font-size', '20px');
      this.emailInput.style('width', '280px');
      this.emailInput.style('height', '30px');
      this.emailInput.style('border-radius', '15px');
      this.emailInput.style('border', 'none');
      this.emailInput.style('padding', '15px');
    }

    hideInput(){
        this.continueButton.hide();
    }

    showInput(){
        this.continueButton.show();
    }

  }