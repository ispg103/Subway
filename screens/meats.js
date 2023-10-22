export class Meats{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.jam =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Jam.png');
      this.jamText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/jam.png');
      this.chicken =this.p5.loadImage('../SUBWAY FOTOS/MEAT/ChickenStrips.png');
      this.chickenText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/strips.png');
      this.turkey =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Turkey.png');
      this.turkeyText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Turkey.png');
      this.salami =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Salami.png');
      this.salamiText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Salami.png');
      this.tuna =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Tuna.png');
      this.tunaText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Tuna.png');
      this.ribs =this.p5.loadImage('../SUBWAY FOTOS/MEAT/BBQrips.png');
      this.ribsText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/ribs.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.meat =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Meat.png');

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
        p5.image(this.meat,155,250);
        p5.image(this.jam,55,275);
        p5.image(this.jamText,92,363);
        p5.image(this.chicken,200,275);
        p5.image(this.chickenText,215,362);
        p5.image(this.turkey,50,383);
        p5.image(this.turkeyText,85,484);
        p5.image(this.salami,200,403);
        p5.image(this.salamiText,240,482);
        p5.image(this.tuna,50,515);
        p5.image(this.tunaText,90,597);
        p5.image(this.ribs,210,514);
        p5.image(this.ribsText,230,595);
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