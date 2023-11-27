export class Thanks{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.thanks =this.p5.loadImage('./SUBWAY FOTOS/TITLES/thanks.png');
      this.icon=this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.come=this.p5.loadImage('./SUBWAY FOTOS/TEXTS/tomorrow.png');

      const buttonXPercentage = 15;
      const buttonYPercentage = 85;

      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;

      this.finishButton = this.p5.createButton('Finish');
      this.finishButton.position(buttonX, buttonY);
      this.finishButton.mousePressed(()=>{
        navigateCallback();
      });

        this.hideInput();
    }
    show(p5){
        p5.background('green');
        p5.image(this.thanks,50,100);
        p5.image(this.icon,110,280);
        p5.image(this.come,55,540);
      this.finishButton.show();

      this.finishButton.style('background-color', '#F3B90C');
      this.finishButton.style('color', '#003308');
      this.finishButton.style('font-size', '29px');
      this.finishButton.style('width', '249px');
      this.finishButton.style('top', '735px');
      this.finishButton.style('left', '68px');
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