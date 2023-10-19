export class Bread{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.white =this.p5.loadImage('../SUBWAY FOTOS/BREAD/Bread.png');
      this.oregano =this.p5.loadImage('../SUBWAY FOTOS/BREAD/OreganoParmesan.png');
      this.wheat =this.p5.loadImage('../SUBWAY FOTOS/BREAD/WholeWheat.png');

        this.startButton = this.p5.createButton('Start');
        this.startButton.position(this.p5.windowWidth / 2 - 50, this.p5.windowHeight / 2 + 60);
        this.startButton.mousePressed(this.navigate);

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,40,100);
        p5.image(this.white,50,300);
        p5.image(this.oregano,80,500);
        p5.image(this.wheat,80,400);
      this.startButton.show();

    }

    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }