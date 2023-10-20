export class Meats{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.jam =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Jam.png');
      this.chicken =this.p5.loadImage('../SUBWAY FOTOS/MEAT/ChickenStrips.png');
      this.turkey =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Turkey.png');
      this.salami =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Salami.png');
      this.tuna =this.p5.loadImage('../SUBWAY FOTOS/MEAT/Tuna.png');
      this.ribs =this.p5.loadImage('../SUBWAY FOTOS/MEAT/BBQrips.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.meat =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Meat.png');

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 7 - 50, this.p5.windowHeight / 2 + 300);
      this.nextButton.mousePressed(this.navigate);

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,155);
        p5.image(this.meat,155,265);
        p5.image(this.jam,55,300);
        p5.image(this.chicken,190,300);
        p5.image(this.turkey,50,400);
        p5.image(this.salami,190,415);
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