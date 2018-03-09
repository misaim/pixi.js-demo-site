let cloudDemo =
{
  // How often (In Frames) the demo should update. PIXI runs at 30FPS by default.
  updateFrame: 30,

  demoSetup: function()
  {
    // Clean the currentDemo (We shouldn't have to - not sure why this is required)
    this.demoClean();

    // Add the demo container to the main container... Because we cut it off when cleaning the last one.
    mainScene.addChild(demoScene);

    footer.text = "Random Clouds\nLiam Frappell 2018"
    app.renderer.backgroundColor = 0x66CCFF;

    let array = new Uint16Array(16);
    for (let i = 0; i < 16; i++)
    {
      for (let j = 0; j < 16; j++)
      {
        array[i][j] = randomInt(0, 1);
      }
    }
    console.log(array[1]);
  },

  demoUpdate: function()
  {
    console.log("Updated!");
    //this.randomSign();
  },

  demoClean: function()
  {
    demoScene.removeChildren();
    exampleGlobal = 0;
  },

  // Optional, demo specific functions.
  randomSign: function()
  {

  }
}
// Let the rest of the site know our demo exists :)
demoMode.push(cloudDemo);
