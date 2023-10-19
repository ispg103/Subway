export class Home{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');

        this.startButton = this.p5.createButton('Start');
        this.startButton.position(this.p5.windowWidth / 2 - 50, this.p5.windowHeight / 2 + 60);
        this.startButton.mousePressed(this.navigate);

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,40,100);
        p5.image(this.icon,40,100);
      this.startButton.show();

    }

    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }