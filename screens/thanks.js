export class Thanks{
    constructor(p5){
      this.p5=p5;
      this.thanks =this.p5.loadImage('../SUBWAY FOTOS/TITLES/thanks.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.come=this.p5.loadImage('../SUBWAY FOTOS/TEXTS/tomorrow.png');

        this.finishButton = this.p5.createButton('Finish');
        this.finishButton.position(this.p5.windowWidth / 10 - 87, this.p5.windowHeight / 2 + 250);
        this.finishButton.mousePressed(this.navigate);
      
        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.thanks,50,100);
        p5.image(this.icon,100,235);
        p5.image(this.come,50,500);
      this.finishButton.show();
      
      this.finishButton.style('background-color', '#F3B90C');
      this.finishButton.style('color', '#003308');
      this.finishButton.style('font-size', '29px');
      this.finishButton.style('width', '249px');
      this.finishButton.style('height', '50px');
      this.finishButton.style('border-radius', '39.5px');
      this.finishButton.style('border', 'none');
      this.finishButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');
    }

    hideInput(){
        this.finishButton.hide();
    }

    showInput(){
        this.finishButton.show();
    }

  }