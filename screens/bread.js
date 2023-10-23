export class Bread{
    constructor(p5,navigateCallback){
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

      const buttonXPercentage = 15;
      const buttonYPercentage = 85;

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