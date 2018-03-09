let exampleGlobal = 0;
let cloud;
let cloudArray = [];
tiles = new Container();

let exampleDemo =
{
  // How often (In Frames) the demo should update. PIXI runs at 30FPS by default.
  updateFrame: 1,
  scaleFactor: 4,

  demoSetup: function(delta)
  {
    // Clean the currentDemo (We shouldn't have to - not sure why this is required)
    this.demoClean();

    // Add the demo container to the main container... Because we cut it off when cleaning the last one.
    mainScene.addChild(demoScene);

    demoScene.addChild(tiles);

    footer.text = "World\nLiam Frappell 2018"
    app.renderer.backgroundColor = 0x0F0020;
    darkMode = 1;

    id = PIXI.loader.resources["images/world/1616world.json"].textures;

    //let tileArray = [];
    let xTiles = Math.round((window.innerWidth)/(this.scaleFactor*16.0)) + 1;
    let yTiles = Math.round((window.innerHeight)/(this.scaleFactor*16.0)) + 1;
    //let pond = 1;

    let tileArray = new Uint8Array(xTiles * yTiles);

    this.generateTiles(tileArray, xTiles, yTiles);
    this.updateTiles(tileArray, xTiles, yTiles);

    let cloud;

    for (let i = 0; i < 10; i++)
    {
      cloud = new Sprite(id["cloud0.png"]);
      cloudArray.push(cloud);
      cloud.x = randomInt(0, window.innerWidth - cloud.width);
      cloud.y = randomInt(0, window.innerHeight - cloud.height);
      demoScene.addChild(cloud);
    }


    //cloud.scaleMode = PIXI.SCALE_MODES.NEAREST
    //Position the treasure next to the right edge of the canvas
    //tiles.addChild(cloud);

  },

  demoUpdate: function(delta)
  {
    //console.log("Updated!");
    for (let i = 0; i < 10; i++)
    {
      cloudArray[i].x = cloudArray[i].x + 1;
      if (cloudArray[i].x > window.innerWidth-cloudArray[i].width)
      {
        cloudArray[i].x = 0;
        cloudArray[i].y = randomInt(0, window.innerHeight - cloudArray[i].height);
      }
    }
    // Just in case your javascript isn't the best (Mine isn't), this is how we call internal functions.
    //this.randomSign();
  },

  demoClean: function()
  {
    demoScene.removeChildren();
    exampleGlobal = 0;
  },

  updateTiles: function(inputArray, xSize, ySize)
  {
    for (let i = 0; i < xSize; i++)
    {
      for (let j = 0; j < ySize; j++)
      {
        let tile;
        switch (inputArray[i + j*xSize])
        {
          case 4:
            tile = new Sprite(id["grass1.png"]);
          break
          case 5:
            tile = new Sprite(id["grass2.png"]);
          break
          case 6:
            tile = new Sprite(id["grass3.png"]);
          break
          case 7:
            tile = new Sprite(id["pond0.png"]);
          break
          default:
            tile = new Sprite(id["grass0.png"]);
          break
        }
        tile.x = 16 * this.scaleFactor * (i);
        tile.y = 16 * this.scaleFactor * (j);
        tiles.addChild(tile);
      }
    }
  },

  // Optional, demo specific functions.
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
  },

  generateTiles: function(inputArray, xSize, ySize)
  {
    pond = 0;
    length = inputArray.length - 1;
    for (let i = 0; i < length; i++)
    {
      inputArray[i] = randomInt(0, 25);
      switch (inputArray[i])
      {
        case 7:
          if (pond)
          {
            inputArray[i] = 0;
          }
          pond = 1;
        break
      }

    }
  }


}

// Let the rest of the site know our demo exists :)
demoMode.push(exampleDemo);
