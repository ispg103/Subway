export class Home{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.build=this.p5.loadImage('../SUBWAY FOTOS/TITLES/build.png');

        this.startButton = this.p5.createButton('Start');
        this.startButton.position(this.p5.windowWidth / 7.5 - 50, this.p5.windowHeight / 2 + 250);
        this.startButton.mousePressed(this.navigate);

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,85);
        p5.image(this.icon,100,200);
        p5.image(this.build,95,470);
      this.startButton.show();

    }

    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }