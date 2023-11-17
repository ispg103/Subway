export class Congrats{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.sorry =this.p5.loadImage('../SUBWAY FOTOS/TITLES/congrats.png');
      this.icon=this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo2.png');
      this.enjoy=this.p5.loadImage('../SUBWAY FOTOS/TEXTS/enjoy.png');

      const buttonXPercentage = 15;
      const buttonYPercentage = 80;

      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;

      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(buttonX, buttonY);
      this.nextButton.mousePressed(()=>{
        navigateCallback();
      });

        this.hideInput();
    }
    show(p5){
        p5.background('#FF811F');
        p5.image(this.sorry,45,70);
        p5.image(this.icon,100,265);
        p5.image(this.enjoy,50,520);
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
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }