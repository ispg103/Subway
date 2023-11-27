class Sauce{
  constructor(image,text){
    this.image = image;
    this.text = text;
  }
}

export class Sauces{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.logo =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.choose =this.p5.loadImage('./SUBWAY FOTOS/TITLES/choose.png');
      this.sauce =this.p5.loadImage('./SUBWAY FOTOS/TITLES/Sauce.png');

      this.sauces = [
        { name: 'BBQ', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/BBQ.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/BBQ.png')) },
        { name: 'Mustard', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/Mustard.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/mustard.png')) },
        { name: 'Honey Mustard', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/HoneyMustard.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/honey.png')) },
        { name: 'Chipotle', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/Chipotle.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Chipotle.png')) },
        { name: 'Garlic', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/Garlic.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Garlic.png')) },
        { name: 'Mayonnaise', image: new Sauce(this.p5.loadImage('./SUBWAY FOTOS/SAUCE/Mayonnaise.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/mayonnaise.png')) },
      ];

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

    show(p5) {
      p5.background('green');
      p5.image(this.logo, 65, 60);
      p5.image(this.choose, 55, 140);
      p5.image(this.sauce, 155, 250);
      this.nextButton.show();
      this.nextButton.style('background-color', '#F3B90C');
      this.nextButton.style('color', '#003308');
      this.nextButton.style('font-size', '29px');
      this.nextButton.style('width', '249px');
      this.nextButton.style('top', '735px');
      this.nextButton.style('left', '68px');
      this.nextButton.style('height', '50px');
      this.nextButton.style('border-radius', '39.5px');
      this.nextButton.style('border', 'none');
      this.nextButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');

      let xColumn1 = 40;
      let xColumn2 = 190;
      let y = 290;

      const columnSpacing = 150;

      for (let i = 0; i < this.sauces.length; i++) {
        const sauce = this.sauces[i];
        const x = i % 2 === 0 ? xColumn1 : xColumn2;
        const imageX = x + (columnSpacing - sauce.image.image.width) / 2;
        p5.image(sauce.image.image, imageX, y);

        const textX = x + (columnSpacing - sauce.image.text.width) / 2;
        const textY = y + sauce.image.image.height;
        p5.image(sauce.image.text, textX, textY);

        if (i % 2 !== 0) {
          y += 120;
        }
      }
    }


    hideInput(){
        this.nextButton.hide();
    }

    showInput(){
        this.nextButton.show();
    }

  }