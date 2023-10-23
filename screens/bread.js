class BreadItem {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}

export class Bread {
  constructor(p5, navigateCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('../SUBWAY FOTOS/TITLES/choose.png');
    this.breadTitle = this.p5.loadImage('../SUBWAY FOTOS/TITLES/Bread.png');

    this.breadItems = [
      { name: 'White Bread', images: { bread: this.p5.loadImage('../SUBWAY FOTOS/BREAD/Bread.png'), text: this.p5.loadImage('../SUBWAY FOTOS/TEXTS/White.png') } },
      { name: 'Oregano Parmesan', images: { bread: this.p5.loadImage('../SUBWAY FOTOS/BREAD/OreganoParmesan.png'), text: this.p5.loadImage('../SUBWAY FOTOS/TEXTS/oregano.png') } },
      { name: 'Whole Wheat', images: { bread: this.p5.loadImage('../SUBWAY FOTOS/BREAD/WholeWheat.png'), text: this.p5.loadImage('../SUBWAY FOTOS/TEXTS/wheat.png') } },
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
    p5.image(this.logo, 65, 75);
    p5.image(this.choose, 55, 140);
    p5.image(this.breadTitle, 150, 260);

    this.nextButton.show();

    this.nextButton.style('background-color', '#F3B90C');
    this.nextButton.style('color', '#003308');
    this.nextButton.style('font-size', '29px');
    this.nextButton.style('width', '249px');
    this.nextButton.style('height', '50px');
    this.nextButton.style('border-radius', '39.5px');
    this.nextButton.style('border', 'none');
    this.nextButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');

    const columnSpacing = 150;
    let y = 310;

    for (let i = 0; i < this.breadItems.length; i++) {
      const breadItem = this.breadItems[i];
      const x = (this.p5.width - breadItem.images.bread.width) / 2;
      const imageX = x;
      p5.image(breadItem.images.bread, imageX, y);

      const textX = (this.p5.width - breadItem.images.text.width) / 2;
      const textY = y + breadItem.images.bread.height;
      p5.image(breadItem.images.text, textX, textY);

      y += breadItem.images.bread.height + 20;
    }

    this.nextButton.show();
  }


  hideInput() {
    this.nextButton.hide();
  }

  showInput() {
    this.nextButton.show();
  }
}
