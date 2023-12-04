class Vegetable {
  constructor(image, text) {
    this.image = image;
    this.text = text;
  }
}

export class Vegetables {
  constructor(p5, navigateCallback,selectionCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/choose.png');
    this.vegetablesTitle = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Vegetables.png');

    this.vegetables = [
      { name: 'Tomato', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/Tomato.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Tomato.png') } },
      { name: 'Pickle', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/Pickle.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/Pickle.png') } },
      { name: 'Onion', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/Onion.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/onion.png') } },
      { name: 'Lettuce', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/Lettuce.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/lettuce.png') } },
      { name: 'Jalapeño', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/Jalapeño.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/jalapeño.png') } },
      { name: 'Bell Pepper', images: { vegetable: this.p5.loadImage('./SUBWAY FOTOS/VEGETABLES/BellPepper.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/pepper.png') } },
    ];

    this.selectionCallback=selectionCallback;
    this.selectedVegetable = null;

    const buttonXPercentage = 15;
    const buttonYPercentage = 85;

    const buttonX = (buttonXPercentage / 100) * this.p5.width;
    const buttonY = (buttonYPercentage / 100) * this.p5.height;

    this.nextButton = this.p5.createButton('Next');
    this.nextButton.position(buttonX, buttonY);
    this.nextButton.mousePressed(() => {
      const userData = {
        selectedVegetable: this.selectedVegetable,
      };
      console.log('Vegetal seleccionado:', userData);
      this.selectionCallback({ selectedVegetable: this.selectedVegetable });
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

    for (let i = 0; i < this.vegetables.length; i++) {
      const vegetable = this.vegetables[i];
      const x = i % 2 === 0 ? xColumn1 : xColumn2;
      const imageX = x + (columnSpacing - vegetable.images.vegetable.width) / 2;
      const imageY = y;

      p5.image(vegetable.images.vegetable, imageX, imageY);

      const textX = x + (columnSpacing - vegetable.images.text.width) / 2;
      const textY = y + vegetable.images.vegetable.height;
      p5.image(vegetable.images.text, textX, textY);

      if (p5.mouseIsPressed) {
        const mouseX = p5.mouseX; // Obtén la posición X del mouse
        const mouseY = p5.mouseY; // Obtén la posición Y del mouse

        if (
          mouseX > imageX &&
          mouseX < imageX + vegetable.images.vegetable.width &&
          mouseY > imageY &&
          mouseY < imageY + vegetable.images.vegetable.height
        ) {
          this.selectedVegetable = vegetable.name;
          console.log('Vegetal seleccionado:', this.selectedVegetable);
        }
      }

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
