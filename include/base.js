let baseColor = randomColor(); colorDiv = 2;
squares = [];

function baseSetup()
{
  mainScene.addChild(baseScene)
  footer.text = "Gradient Pixeliser\nLiam Frappell 2018"
  darkMode = 0;
  for (let i = 0; i < 64; i++)
  {
    let square = new Graphics();
    square.beginFill(hsvToRgb(baseColor, (i/64)*99 + 1, 100));
    if (mobileMode)
    {
      square.drawRect(0, 0, window.innerWidth, window.innerHeight/64);
      square.endFill();
      square.x = 0;
      square.y = ((window.innerHeight/64)*i);;
    }
    else
    {
      square.drawRect(0, 0, window.innerWidth/64, window.innerHeight);
      square.endFill();
      square.x = ((window.innerWidth/64)*i);
      square.y = 0;
    }
    squares.push(square);
    baseScene.addChild(square);
  }
}

function baseUpdate()
{
  //3.0*Math.round(n/3.0)
  let no = 0;

  if(colorDiv >= 64 + 1)
  {
    no = (1/(128-colorDiv)) * 100;
  }
  else
  {
    no = (1/colorDiv)*100;
  }

  if (colorDiv >= 124)
  {
    colorDiv = 4;
    baseColor = baseColor + 10;
    if (baseColor >= 360)
    {
      baseColor = 0;
    }
  }
  colorDiv++;
  //baseColor = randomColor()
  for (let i = 0; i < 64; i++)
  {

    squares[i].clear();
    if (no == 100)
    {
      squares[i].beginFill(hsvToRgb(baseColor, 100, 100)); // BG colour
    }
    else
    {
      squares[i].beginFill(hsvToRgb(baseColor, no*Math.floor((((i+1)/65)*99)/no)+1, 100)); // BG colour
    }
    if (mobileMode)
    {
      squares[i].drawRect(0, 0, window.innerWidth, window.innerHeight/64); //Size
    }
    else
    {
      squares[i].drawRect(0, 0, window.innerWidth/64, window.innerHeight); //Size
    }
    squares[i].endFill();
  }
}

function baseClean()
{
  squares = [];
  baseColor = randomColor();
  colorDiv = 2;
}
