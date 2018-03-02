function palleteSetup()
{
  mainScene.addChild(palleteScene)
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
    palleteScene.addChild(square);
  }
}

function palleteUpdate()
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
}

function palleteClean()
{
  squares = [];
  baseColor = randomColor();
}
