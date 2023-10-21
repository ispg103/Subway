export class Bread{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.white =this.p5.loadImage('../SUBWAY FOTOS/BREAD/Bread.png');
      this.whiteText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/White.png');
      this.oregano =this.p5.loadImage('../SUBWAY FOTOS/BREAD/OreganoParmesan.png');
      this.oreganoText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/oregano.png');
      this.wheat =this.p5.loadImage('../SUBWAY FOTOS/BREAD/WholeWheat.png');
      this.wheatText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/wheat.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.bread =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Bread.png');

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,75);
        p5.image(this.choose,55,170);
        p5.image(this.white,90,330);
        p5.image(this.whiteText,165,415);
        p5.image(this.oregano,85,435);
        p5.image(this.oreganoText,110,525);
        p5.image(this.wheat,85,540);
        p5.image(this.wheatText,145,630);
        p5.image(this.bread,150,280);
    }

    hideInput(){
    }

    showInput(){
    }

  }