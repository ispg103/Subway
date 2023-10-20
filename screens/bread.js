export class Bread{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.white =this.p5.loadImage('../SUBWAY FOTOS/BREAD/Bread.png');
      this.oregano =this.p5.loadImage('../SUBWAY FOTOS/BREAD/OreganoParmesan.png');
      this.wheat =this.p5.loadImage('../SUBWAY FOTOS/BREAD/WholeWheat.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,170);
        p5.image(this.white,90,320);
        p5.image(this.oregano,85,430);
        p5.image(this.wheat,85,530);
    }

    hideInput(){
        this.continueButton.hide();
    }

    showInput(){
        this.continueButton.show();
    }

  }