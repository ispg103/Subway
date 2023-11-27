export class Scores{
    constructor(p5,navigateCallback){
      this.p5=p5;
      this.logo =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.scores =this.p5.loadImage('./SUBWAY FOTOS/TITLES/scores.png');
      this.players =this.p5.loadImage('./SUBWAY FOTOS/TEXTS/players.png');
      this.first =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/FirstPlace.png');
      this.second =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/SecondPlace.png');
      this.third =this.p5.loadImage('./SUBWAY FOTOS/EXTRAS/ThirdPlace.png');

      const buttonXPercentage = 15;
      const buttonYPercentage = 80;

      const buttonX = (buttonXPercentage / 100) * this.p5.width;
      const buttonY = (buttonYPercentage / 100) * this.p5.height;

      this.continueButton = this.p5.createButton('Continue');
      this.continueButton.position(buttonX, buttonY);
      this.continueButton.mousePressed(()=>{
        navigateCallback();
      });

      this.hideInput();

    }
    show(p5){
        p5.background('green');
        p5.image(this.logo,65,60);
        p5.image(this.scores,55,150);
        p5.image(this.players,55,265);
        p5.image(this.first,70,330);
        p5.image(this.second,40,460);
        p5.image(this.third,200,460);
        this.continueButton.show();

        this.continueButton.style('background-color', '#F3B90C');
        this.continueButton.style('color', '#003308');
        this.continueButton.style('font-size', '29px');
        this.continueButton.style('width', '249px');
        this.continueButton.style('height', '50px');
        this.continueButton.style('border-radius', '39.5px');
        this.continueButton.style('border', 'none');
        this.continueButton.style('box-shadow', '0px 4px 4px 0px rgba(0, 0, 0, 0.25');

    }

    hideInput(){
        this.continueButton.hide();
    }

    showInput(){
        this.continueButton.show();
    }

  }