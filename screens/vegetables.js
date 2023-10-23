class Vegetable {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}
export class Vegetables {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
    this.vegetablesTitle = this.p5.loadImage('../SUBWAY FOTOS/TITLES/Vegetables.png');

    this.vegetables = [
      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Tomato.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Tomato.png')),

      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Pickle.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/Pickle.png')),

      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Onion.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/onion.png')),

      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Lettuce.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/lettuce.png')),


      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/Jalapeño.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/jalapeño.png')),

      new Vegetable(this.p5.loadImage('../SUBWAY FOTOS/VEGETABLES/BellPepper.png'),
      this.p5.loadImage('../SUBWAY FOTOS/TEXTS/pepper.png')),

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
    p5.image(this.vegetablesTitle, 130, 250);


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
    const textSize = 16;

    for (let i = 0; i < this.vegetables.length; i++) {
      const vegetable = this.vegetables[i];
      const x = i % 2 === 0 ? xColumn1 : xColumn2;
      const imageX = x + (columnSpacing - vegetable.image.width) / 2;
      p5.image(vegetable.image, imageX, y);

      const textX = x + (columnSpacing - vegetable.text.width) / 2;
      const textY = y + vegetable.image.height;
      p5.image(vegetable.text, textX, textY);

      if (i % 2 !== 0) {
        y += 120;
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
