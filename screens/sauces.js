export class Sauces{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.bbq =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/BBQ.png');
      this.bbqText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/BBQ.png');
      this.mustard =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Mustard.png');
      this.mustText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/mustard.png');
      this.honey =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/HoneyMustard.png');
      this.honeyText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/honey.png');
      this.chipotle =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Chipotle.png');
      this.chipotleText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Chipotle.png');
      this.garlic =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Garlic.png');
      this.garlicText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Garlic.png');
      this.mayo =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Mayonnaise.png');
      this.mayoText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/mayonnaise.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.sauce =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Sauce.png');

      const buttonXPercentage = 15; 
      const buttonYPercentage = 85;
    
      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;
  
      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(buttonX, buttonY);
      this.nextButton.mousePressed(this.navigate);

      this.hideInput();

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,60);
        p5.image(this.choose,55,140);
        p5.image(this.sauce,150,250);
        p5.image(this.bbq,75,290);
        p5.image(this.bbqText,99,370);
        p5.image(this.mustard,200,282);
        p5.image(this.mustText,226,372);
        p5.image(this.honey,60,390);
        p5.image(this.honeyText,63,480);
        p5.image(this.chipotle,210,391);
        p5.image(this.chipotleText,224,480);
        p5.image(this.garlic,70,505);
        p5.image(this.garlicText,94,594);
        p5.image(this.mayo,212,502);
        p5.image(this.mayoText,210,594);
        this.nextButton.show();


        this.nextButton.style('background-color', '#F3B90C');
        this.nextButton.style('color', '#003308');
        this.nextButton.style('font-size', '29px');
        this.nextButton.style('width', '249px');
        this.nextButton.style('height', '50px');
        this.nextButton.style('border-radius', '39.5px');
        this.nextButton.style('border', 'none');
        this.nextButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');
    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }