let palleteDemo =
{
  updateFrame: 30,

  demoSetup: function()
  {
    this.demoClean();
    mainScene.addChild(demoScene)
    footer.text = "Pallete Generator\nLiam Frappell 2018";
    darkMode = 0;
    for (let i = 0; i < 8; i++)
    {
      let square = new Graphics();
      square.beginFill(hsvToRgb(baseColor, (i/8)*99 + 1, 100));
      if (mobileMode)
      {
        square.drawRect(0, 0, window.innerWidth, window.innerHeight/8);
        square.endFill();
        square.x = 0;
        square.y = ((window.innerHeight/8)*i);;
      }
      else
      {
        square.drawRect(0, 0, window.innerWidth/8, window.innerHeight);
        square.endFill();
        square.x = ((window.innerWidth/8)*i);
        square.y = 0;
      }
      squares.push(square);
      demoScene.addChild(square);
    }
  },

  demoUpdate: function()
  {
    baseColor = randomColor()
    for (let i = 0; i < 8; i++)
    {
      squares[i].clear();
      squares[i].beginFill(hsvToRgb(baseColor, (i/8)*99 + 1, 100)); // BG colour
      if (mobileMode)
      {
        squares[i].drawRect(0, 0, window.innerWidth, window.innerHeight/8); //Size
      }
      else
      {
        squares[i].drawRect(0, 0, window.innerWidth/8, window.innerHeight); //Size
      }
      squares[i].endFill();
    }
  },

  demoClean: function()
  {
    squares = [];
    baseColor = randomColor();
  }
}

demoMode.push(palleteDemo);
