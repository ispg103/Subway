class CheeseItem {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}

export class Cheese {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/choose.png');
    this.cheeseTitle = this.p5.loadImage('./SUBWAY FOTOS/TITLES/CHEESE.png');

    this.cheeseItems = [
      { name: 'American', images: { CheeseItem: this.p5.loadImage('./SUBWAY FOTOS/CHEESE/AmericanCheese.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/american.png') } },
      { name: 'Mozzarella', images: { CheeseItem: this.p5.loadImage('./SUBWAY FOTOS/CHEESE/MozzarellaCheese.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/mozzarella.png') } },
      { name: 'Provolone', images: { CheeseItem: this.p5.loadImage('./SUBWAY FOTOS/CHEESE/ProvoloneCheese.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Provolone.png') } },
      { name: 'Cheddar', images: { CheeseItem: this.p5.loadImage('./SUBWAY FOTOS/CHEESE/CheddarCheese.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/cheddar.png') } },
    ];

    const buttonXPercentage = 15;
    const buttonYPercentage = 85;

    const buttonX = (buttonXPercentage / 100) * this.p5.width;
    const buttonY = (buttonYPercentage / 100) * this.p5.height;

    this.nextButton = this.p5.createButton('Next');
    this.nextButton.position(buttonX, buttonY);
    this.nextButton.mousePressed(() => {
      navigateCallback();
    });

    this.hideInput();
  }

  show(p5) {
    p5.background('green');
    p5.image(this.logo, 65, 60);
    p5.image(this.choose, 55, 140);
    p5.image(this.cheeseTitle, 145, 257);

    this.nextButton.show();

    this.nextButton.style('background-color', '#F3B90C');
    this.nextButton.style('color', '#003308');
    this.nextButton.style('font-size', '29px');
    this.nextButton.style('width', '249px');
    this.nextButton.style('height', '50px');
    this.nextButton.style('border-radius', '39.5px');
    this.nextButton.style('border', 'none');
    this.nextButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');

    let xColumn1 = 40;
    let xColumn2 = 190;
    let y = 290;

    const columnSpacing = 150;

    for (let i = 0; i < this.cheeseItems.length; i++) {
      const cheeseItem = this.cheeseItems[i];
      const x = i % 2 === 0 ? xColumn1 : xColumn2;
      const imageX = x + (columnSpacing - cheeseItem.images.CheeseItem.width) / 2;
      p5.image(cheeseItem.images.CheeseItem, imageX, y);

      const textX = x + (columnSpacing - cheeseItem.images.text.width) / 2;
      const textY = y + cheeseItem.images.CheeseItem.height;
      p5.image(cheeseItem.images.text, textX, textY);

      if (i % 2 !== 0) {
        y += 190;
      }
    }
  }


  hideInput() {
    this.nextButton.hide();
  }

  showInput() {
    this.nextButton.show();
  }
}
