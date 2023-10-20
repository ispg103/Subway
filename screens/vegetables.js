export class Vegetables{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.tomato =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Tomato.png');
      this.lettuce =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Lettuce.png');
      this.pickle =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Pickle.png');
      this.onion =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Onion.png');
      this.jalapeño =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Jalapeño.png');
      this.bellpepper =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/BellPepper.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.vegetables =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Vegetables.png');

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 7.3 - 50, this.p5.windowHeight / 2 + 300);
      this.nextButton.mousePressed(this.navigate);

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,155);
        p5.image(this.vegetables,130,265);
        p5.image(this.tomato,75,310);
        p5.image(this.lettuce,200,270);
        p5.image(this.pickle,50,408);
        p5.image(this.onion,210,408);
        p5.image(this.jalapeño,70,520);
        p5.image(this.bellpepper,212,522);

    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }