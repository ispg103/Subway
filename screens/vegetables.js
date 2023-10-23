export class Vegetables{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.tomato =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Tomato.png');
      this.tomatoText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Tomato.png');
      this.lettuce =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Lettuce.png');
      this.lettuceText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/lettuce.png');
      this.pickle =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Pickle.png');
      this.pickleText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Pickle.png');
      this.onion =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Onion.png');
      this.onionText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/onion.png');
      this.jalapeño =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Jalapeño.png');
      this.jalaText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/jalapeño.png');
      this.bellpepper =this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/BellPepper.png');
      this.pepperText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/pepper.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.vegetables =this.p5.loadImage('../SUBWAY FOTOS/TITLES/Vegetables.png');

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
        p5.image(this.logo,65,60);
        p5.image(this.choose,55,140);
        p5.image(this.vegetables,130,250);
        p5.image(this.tomato,75,290);
        p5.image(this.tomatoText,86,366);
        p5.image(this.lettuce,200,250);
        p5.image(this.lettuceText,245,366);
        p5.image(this.pickle,50,392);
        p5.image(this.pickleText,90,477);
        p5.image(this.onion,210,388);
        p5.image(this.onionText,251,477);
        p5.image(this.jalapeño,70,506);
        p5.image(this.jalaText,80,597);
        p5.image(this.bellpepper,212,510);
        p5.image(this.pepperText,230,597);
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