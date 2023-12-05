class BreadItem {
  constructor(image) {
    this.image = image;
    this.text = text;
  }
}

//:)
export class Bread {
  constructor(p5, navigateCallback, onSelectBreadCallback) {
    this.p5 = p5;
    this.logo = this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
    this.choose = this.p5.loadImage('./SUBWAY FOTOS/TITLES/choose.png');
    this.breadTitle = this.p5.loadImage('./SUBWAY FOTOS/TITLES/Bread.png');

    this.breadItems = [
      { name: 'White Bread', images: { bread: this.p5.loadImage('./SUBWAY FOTOS/BREAD/Bread.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/White.png') } },
      { name: 'Oregano Parmesan', images: { bread: this.p5.loadImage('./SUBWAY FOTOS/BREAD/OreganoParmesan.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/oregano.png') } },
      { name: 'Whole Wheat', images: { bread: this.p5.loadImage('./SUBWAY FOTOS/BREAD/WholeWheat.png'), text: this.p5.loadImage('./SUBWAY FOTOS/TEXTS/wheat.png') } },
    ];

    this.selectedBread = null;

    const buttonXPercentage = 18;
    const buttonYPercentage = 85;

    const buttonX = (buttonXPercentage / 100) * this.p5.width;
    const buttonY = (buttonYPercentage / 100) * this.p5.height;

    this.nextButton = this.p5.createButton('Next');
    this.nextButton.position(buttonX, buttonY);
    this.nextButton.mousePressed(() => {

      const userData = {
        selectedBread: this.selectedBread,
      };
      console.log('Pan seleccionado:', userData);

      navigateCallback();
    });

    this.hideInput();
    this.onSelectBreadCallback = onSelectBreadCallback;

  }

  show(p5) {

    p5.background('green');
    p5.image(this.logo, 65, 75);
    p5.image(this.choose, 55, 140);
    p5.image(this.breadTitle, 145, 257);


    this.nextButton.show();

    this.nextButton.style('background-color', '#F3B90C');
    this.nextButton.style('color', '#003308');
    this.nextButton.style('font-size', '29px');
    this.nextButton.style('width', '245px');
    this.nextButton.style('top', '720px');
    this.nextButton.style('left', '68px');
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

      // Dibuja el texto debajo de la imagen del pan
      const textX = (this.p5.width - breadItem.images.text.width) / 2;
      const textY = y + breadItem.images.bread.height ;
      p5.image(breadItem.images.text, textX, textY);

      // Detectar clics en los elementos
      if (
        p5.mouseX > imageX &&
        p5.mouseX < imageX + breadItem.images.bread.width &&
        p5.mouseY > y &&
        p5.mouseY < y + breadItem.images.bread.height &&
        p5.mouseIsPressed
      ) {
        this.selectedBread = breadItem.name;
        console.log('Pan seleccionado:', this.selectedBread);
        this.onSelectBreadCallback(this.selectedBread);
      }


      y += breadItem.images.bread.height + 20; // Incremento para la siguiente posición
    }
  }


  hideInput() {
    this.nextButton.hide();
  }

  showInput() {
    this.nextButton.show();
  }
}