let circleOrigin = [  [ 0,0 ],
                      [ 0,0 ],
                      [ 0,0 ],
                      [ 0, 0],
                      [ 0, 0]];

circleOne = new Container();
circleTwo = new Container();
circleThree = new Container();
circleFour = new Container();
circleFive = new Container();

let circleOnePoints = 0;
let currentQuad = 1;
let radi = [0, 0, 0, 0, 0];
let circleColor = [0xFFFFFF,0xFFFFFF,0xFFFFFF, 0xFFFFFF, 0xFFFFFF]
let drawOriginX = 0;
let drawOriginY = 0;
let currentCircle = 0;
let drawPointX = 0, drawPointY = 0;

let circleDemo =
{
  updateFrame: 5,

  demoSetup: function()
  {
    // This isn't called for some reason. TODO research why
    this.demoClean();
    
    mainScene.addChild(demoScene);
    demoScene.addChild(circleOne);
    demoScene.addChild(circleTwo);
    demoScene.addChild(circleThree);
    demoScene.addChild(circleFour);
    demoScene.addChild(circleFive);

    footer.text = "Circle Draw\nLiam Frappell 2018"
    app.renderer.backgroundColor = 0x0F0020;
    darkMode = 1;
    this.randomCircle();
  },

  demoUpdate: function()
  {
    let stepSize = radi[currentCircle] / 10;
    if (currentQuad == 3)
    {
      drawOriginX = circleOrigin[currentCircle][0] + circleOnePoints;
      drawOriginY = circleOrigin[currentCircle][1] - Math.sqrt((radi[currentCircle]*radi[currentCircle]) - (circleOnePoints*circleOnePoints));
    }
    else if (currentQuad == 2)
    {
      drawOriginX = circleOrigin[currentCircle][0] - circleOnePoints;
      drawOriginY = circleOrigin[currentCircle][1] - Math.sqrt((radi[currentCircle]*radi[currentCircle]) - (circleOnePoints*circleOnePoints));
    }
    else if (currentQuad == 1)
    {
      drawOriginX = circleOrigin[currentCircle][0] - circleOnePoints;
      drawOriginY = circleOrigin[currentCircle][1] + Math.sqrt((radi[currentCircle]*radi[currentCircle]) - (circleOnePoints*circleOnePoints));
    }
    else
    {
      drawOriginX = circleOrigin[currentCircle][0] + circleOnePoints;
      drawOriginY = circleOrigin[currentCircle][1] + Math.sqrt((radi[currentCircle]*radi[currentCircle]) - (circleOnePoints*circleOnePoints));
    }

    let line = new Graphics();
    line.lineStyle(4, circleColor[currentCircle], 1);
    line.moveTo(drawOriginX, drawOriginY);

    line.lineTo(circleOrigin[currentCircle][0] + drawPointX, circleOrigin[currentCircle][1] + drawPointY);

    switch(currentCircle)
    {
      case 0:
        circleOne.addChild(line);
      break
      case 1:
        circleTwo.addChild(line);
      break
      case 2:
        circleThree.addChild(line);
      break
      case 3:
        circleFour.addChild(line);
      break
      case 4:
        circleFive.addChild(line);
      break
    }

    if (circleOnePoints > 0.9*radi[currentCircle])
    {
      circleOnePoints = circleOnePoints + stepSize/4;
    }
    else if (circleOnePoints > 0.8*radi[currentCircle])
    {
      circleOnePoints = circleOnePoints + stepSize/2;
    }
    else
    {
      circleOnePoints = circleOnePoints + stepSize;
    }

    if( circleOnePoints > radi[currentCircle])
    {
      circleOnePoints = 0;
      currentQuad++;
      if (currentQuad == 5)
      {
        currentQuad = 1;
        switch(currentCircle)
        {
          case 4:
            circleOne.removeChildren();
          break
          case 0:
            circleTwo.removeChildren();
          break
          case 1:
            circleThree.removeChildren();
          break
          case 2:
            circleFour.removeChildren();
          break
          case 3:
            circleFive.removeChildren();
          break
        }
        currentCircle++

        if(currentCircle == 5)
        {
          currentCircle = 0;
        }
        this.randomCircle();
      }
    }
  },

  demoClean: function()
  {
    circleOne.removeChildren();
    circleTwo.removeChildren();
    circleThree.removeChildren();
    circleFour.removeChildren();
    circleFive.removeChildren();
    demoScene.removeChildren();
    circleOnePoints = 0;
    currentCircle = 0;
    currentQuad = 1;
  },

  randomCircle: function()
  {
    radi[currentCircle] = randomInt(75, 300);
    circleOrigin[currentCircle][0] = randomInt(0 + radi[currentCircle], window.innerWidth - radi[currentCircle]);
    circleOrigin[currentCircle][1] = randomInt(0 + radi[currentCircle], window.innerHeight - radi[currentCircle]);
    circleColor[currentCircle] = hsvToRgb(randomColor(), 100, 100);
    drawPointX = this.randomSign() * randomInt(0, radi[currentCircle]);
    drawPointY = this.randomSign() * Math.sqrt((radi[currentCircle]*radi[currentCircle]) - (drawPointX*drawPointX));
  },

  randomSign: function()
  {
    switch( Math.floor(Math.random()+0.5))
    {
      case 0:
        return -1;
      break
      case 1:
        return 1;
      break
    }

  }
}

demoMode.push(circleDemo);
