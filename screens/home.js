export class Home{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.build=this.p5.loadImage('../SUBWAY FOTOS/TITLES/build.png');

        this.startButton = this.p5.createButton('Start');
        this.startButton.position(this.p5.windowWidth / 10 - 87, this.p5.windowHeight / 2 + 250);
        this.startButton.mousePressed(this.navigate);

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,85);
        p5.image(this.icon,100,200);
        p5.image(this.build,100,470);
      this.startButton.show();
      
      this.startButton.style('background-color', '#F3B90C');
      this.startButton.style('color', '#003308');
      this.startButton.style('font-size', '29px');
      this.startButton.style('width', '249px');
      this.startButton.style('border-radius', '39.5px');
      this.startButton.style('border', 'none');

    }

    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }