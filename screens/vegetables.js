export class Vegetables{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.tomato =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Tomato.png');
      this.tomatoText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Tomato.png');
      this.lettuce =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Lettuce.png');
      this.lettuceText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/lettuce.png');
      this.pickle =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Pickle.png');
      this.pickleText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Pickle.png');
      this.onion =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Onion.png');
      this.onionText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/onion.png');
      this.jalapeño =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Jalapeño.png');
      this.jalaText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/jalapeño.png');
      this.bellpepper =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/BellPepper.png');
      this.pepperText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/pepper.png');
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
        p5.image(this.tomatoText,86,385);
        p5.image(this.lettuce,200,270);
        p5.image(this.lettuceText,245,385);
        p5.image(this.pickle,50,408);
        p5.image(this.pickleText,90,490);
        p5.image(this.onion,210,403);
        p5.image(this.onionText,251,491);
        p5.image(this.jalapeño,70,520);
        p5.image(this.jalaText,80,612);
        p5.image(this.bellpepper,212,522);
        p5.image(this.pepperText,230,612);

    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }