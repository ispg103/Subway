export class Start{
    constructor(p5,navigateCallback) {
      this.p5 = p5;
      this.logo = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayLogo.png');
      this.icon = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/SubwayIcon.png');
      this.next = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/NextIcon.png');
      this.subway = this.p5.loadImage('../SUBWAY FOTOS/EXTRAS/sub.png');
      this.textWin = this.p5.loadImage('../SUBWAY FOTOS/TITLES/WWIN.png');

      `this.next.mousePressed(()=>{
        navigateCallback();
      });`

      this.hideInput();
    }

      show(p5){
          p5.background('green');
          p5.image(this.logo,65,85);
          p5.image(this.icon,100,200);
          p5.image(this.next,100,470);
          p5.image(this.subway,100,470);
          p5.image(this.textWin,100,470);
          //this.next.show();
      }

      //hideInput(){
        //  this.next.hide();
      //}

      //showInput(){
        //  this.next.show();
      //}

    }