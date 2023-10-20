export class Sauces{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.bbq =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/BBQ.png');
      this.mustard =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Mustard.png');
      this.honey =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/HoneyMustard.png');
      this.chipotle =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Chipotle.png');
      this.garlic =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Garlic.png');
      this.mayo =this.p5.loadImage('../SUBWAY FOTOS/SAUCE/Mayonnaise.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.sauce =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Sauce.png');

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 7 - 50, this.p5.windowHeight / 2 + 300);
      this.nextButton.mousePressed(this.navigate);

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,155);
        p5.image(this.sauce,150,265);
        p5.image(this.bbq,75,310);
        p5.image(this.mustard,200,302);
        p5.image(this.honey,60,408);
        p5.image(this.chipotle,210,408);
        p5.image(this.garlic,70,520);
        p5.image(this.mayo,212,522);

    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }