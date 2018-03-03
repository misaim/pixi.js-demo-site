let exampleGlobal = 0;

let exampleDemo =
{
  // How often (In Frames) the demo should update. PIXI runs at 30FPS by default.
  updateFrame: 30,

  demoSetup: function()
  {
    // Clean the currentDemo (We shouldn't have to - not sure why this is required)
    this.demoClean();

    // Add the demo container to the main container... Because we cut it off when cleaning the last one.
    mainScene.addChild(demoScene);

    footer.text = "Circle Draw\nLiam Frappell 2018"
    app.renderer.backgroundColor = 0x0F0020;
    darkMode = 1;

  },

  demoUpdate: function()
  {
    console.log("Updated!");
    // Just in case your javascript isn't the best (Mine isn't), this is how we call internal functions.
    this.randomSign();
  },

  demoClean: function()
  {
    demoScene.removeChildren();
    exampleGlobal = 0;
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

  }
}

// Let the rest of the site know our demo exists :)
demoMode.push(exampleDemo);
