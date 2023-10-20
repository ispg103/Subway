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

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 7.3 - 50, this.p5.windowHeight / 2 + 300);
      this.nextButton.mousePressed(this.navigate);

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,155);
        p5.image(this.meat,155,265);
        p5.image(this.jam,55,300);
        p5.image(this.jamText,92,385);
        p5.image(this.chicken,190,300);
        p5.image(this.chickenText,205,385);
        p5.image(this.turkey,50,405);
        p5.image(this.turkeyText,85,505);
        p5.image(this.salami,190,422);
        p5.image(this.salamiText,230,503);
        p5.image(this.tuna,50,537);
        p5.image(this.tunaText,90,622);
        p5.image(this.ribs,200,537);
        p5.image(this.ribsText,222,622);

    }

    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }