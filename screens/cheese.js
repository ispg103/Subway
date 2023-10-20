export class Cheese{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.american =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/AmericanCheese.png');
      this.mozzarella =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/MozzarellaCheese.png');
      this.provolone =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/ProvoloneCheese.png');
      this.cheddar =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/CheddarCheese.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.cheese =this.p5.loadImage('../SUBWAY FOTOS/TITLES/CHEESE.png');

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 6.8 - 50, this.p5.windowHeight / 2 + 280);
      this.nextButton.mousePressed(this.navigate);

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,155);
        p5.image(this.cheese,155,265);
        p5.image(this.american,30,300);
        p5.image(this.mozzarella,210,315);
        p5.image(this.provolone,70,475);
        p5.image(this.cheddar,185,470);
        p5.image(this.tuna,50,520);
        p5.image(this.ribs,200,522);

    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }