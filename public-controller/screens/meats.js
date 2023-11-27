class Meat {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}

export class Meats {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/choose.png');
    this.meat = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Meat.png');

      this.meats = [
        { name: 'Jam', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/Jam.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/jam.png')) },
        { name: 'Chicken Strips', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/ChickenStrips.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/strips.png')) },
        { name: 'Turkey', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/Turkey.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Turkey.png')) },
        { name: 'Salami', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/Salami.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Salami.png')) },
        { name: 'Tuna', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/Tuna.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Tuna.png')) },
        { name: 'BBQ Ribs', image: new Meat(this.p5.loadImage('./SUBWAY FOTOS/MEAT/BBQrips.png'), this.p5.loadImage('./SUBWAY FOTOS/TEXTS/ribs.png')) },
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
    p5.image(this.meat, 163, 250);

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
    const textSize = 16;

    for (let i = 0; i < this.meats.length; i++) {
      const meat = this.meats[i];
      const x = i % 2 === 0 ? xColumn1 : xColumn2;
      const imageX = x + (columnSpacing - meat.image.image.width) / 2;
      p5.image(meat.image.image, imageX, y);

      const textX = x + (columnSpacing - meat.image.text.width) / 2;
      const textY = y + meat.image.image.height;
      p5.image(meat.image.text, textX, textY);

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
