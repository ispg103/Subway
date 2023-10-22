export class Cheese{
    constructor(p5){
      this.p5=p5;
      this.logo =this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.american =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/AmericanCheese.png');
      this.ameText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/american.png');
      this.mozzarella =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/MozzarellaCheese.png');
      this.mozzaText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/mozzarella.png');
      this.provolone =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/ProvoloneCheese.png');
      this.provoText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Provolone.png');
      this.cheddar =this.p5.loadImage('../SUBWAY FOTOS/CHEESE/CheddarCheese.png');
      this.cheddarText =this.p5.loadImage('../SUBWAY FOTOS/TEXTS/cheddar.png');
      this.choose =this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
      this.cheese =this.p5.loadImage('../SUBWAY FOTOS/TITLES/CHEESE.png');

      const buttonXPercentage = 15; 
      const buttonYPercentage = 85;
    
      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;
  
      this.nextButton = this.p5.createButton('Next');
      this.nextButton.position(buttonX, buttonY);
      this.nextButton.mousePressed(this.navigate);

      this.hideInput();

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,60);
        p5.image(this.choose,55,140);
        p5.image(this.cheese,145,257);
        p5.image(this.american,30,300);
        p5.image(this.ameText,77,420);
        p5.image(this.mozzarella,210,315);
        p5.image(this.mozzaText,231,420);
        p5.image(this.provolone,65,475);
        p5.image(this.provoText,77,578);
        p5.image(this.cheddar,185,470);
        p5.image(this.cheddarText,237,578);
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