export class Home2{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.logo =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon=this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.combination=this.p5.loadImage('./SUBWAY FOTOS/TITLES/combination.png');

      const buttonXPercentage = 15;
      const buttonYPercentage = 80;

      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;


    this.startButton = this.p5.createButton('Start');
    this.startButton.position(buttonX, buttonY);
    this.startButton.mousePressed(()=>{
      navigateCallback();
    });

        this.hideInput();

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo, 70, 85);
        p5.image(this.icon, 110, 220);
        p5.image(this.combination,28,500);
      this.startButton.show();

      this.startButton.style('background-color', '#F3B90C');
      this.startButton.style('color', '#003308');
      this.startButton.style('font-size', '29px');
      this.startButton.style('width', '249px');
      this.startButton.style('top', '720px');
      this.startButton.style('left', '68px');
      this.startButton.style('height', '50px');
      this.startButton.style('border-radius', '39.5px');
      this.startButton.style('border', 'none');
      this.startButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');
    };


    hideInput(){
        this.startButton.hide();
    }

    showInput(){
        this.startButton.show();
    }

  }