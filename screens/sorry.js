export class Sorry{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.combination=this.p5.loadImage('../SUBWAY FOTOS/TITLES/combination.png');

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(this.p5.windowWidth / 10 - 87, this.p5.windowHeight / 2 + 275);
      this.nextButton.mousePressed(this.navigate);
      
        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,85);
        p5.image(this.icon,100,200);
        p5.image(this.combination,30,470);
      this.nextButton.show();
      
      this.nextButton.style('background-color', '#F3B90C');
      this.nextButton.style('color', '#003308');
      this.nextButton.style('font-size', '29px');
      this.nextButton.style('width', '249px');
      this.nextButton.style('height', '50px');
      this.nextButton.style('border-radius', '39.5px');
      this.nextButton.style('border', 'none');
      this.nextButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');
    }

    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }