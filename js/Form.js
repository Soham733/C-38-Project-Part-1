class Form {

  constructor() {
    this.input = createInput("Username");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.title1= createElement('h4');
    this.resetbutton= createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title1.hide();
  }

  display(){
    this.title.html("Olympic Hurdle Games");
    this.title1.html("Warning: This game is not for children below 5 years!")
    this.title.position(displayWidth/2 -120, 0);
    this.title1.position(displayWidth/5-250,0);

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 -40, displayHeight/2.2);
    this.resetbutton.position(displayWidth/2.1,60);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.username = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.username)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
   this.resetbutton.mousePressed(()=>{
    game.update(0);
    player.updateCount(0);
   })
  }
}
