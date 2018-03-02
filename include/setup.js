// A decently short demo-type website, for showing off various PIXI.js demos
// Liam Frappell, 1/3/2018
// setup.js - contains pixi.js startup info, and also input handling.

//pixi initialization, taken straight from the example
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

//Start our app with default settings
let app = new Application({
    width: 512,
    height: 512,
    antialiasing: true,
    transparent: false,
    resolution: 1
  }
);

// Constants, or as good as you can have in javascript...
let baseMode = 0, palleteMode = 1;
let baseFrame = 4, palleteFrame = 30;

// Allow canvas to take up entire screen, requires css trick to work (See index.html)
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

//Default background colour. Apricot orange!!!
app.renderer.backgroundColor = 0xCC6633;

// For some reason the app hangs when this is removed - the file doesn't exit though.
loader
  .add("images/treasureHunter.json")
  .load(setup);

// Global state based variables (state required for pixi.js)
let state, displayMode = 1, counter = 0, mobileMode = 0, runningStatus = 1;
let darkmode = 0;
let mainScene;
// How often (In frames) each demo needs to update.
let updateFrame = 30;

// we could have proper mobile handling but this works for now.
if (window.innerWidth < window.innerHeight)
{
  mobileMode = 1;
}

function setup()
{
  //Make the main scene and add it to the stage
  mainScene = new Container();
  app.stage.addChild(mainScene);

  // Various containers for a variety of display modes - add new ones here
  baseScene = new Container();
  palleteScene = new Container();

  //Capture the keyboard arrow keys
  let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40),
      rKey = keyboard(82);

  // Reset when user presses r. TODO: make this on press.
  rKey.release = function()
  {
    runningStatus = 0;
    cleanUp();
    changeMode(displayMode);
    runningStatus = 1;
  }
  //Left arrow key `press` method
  left.press = function()
  {
  };
  //Left arrow key `release` method
  left.release = function()
  {
    if (displayMode > 0)
    {
      runningStatus = 0;
      cleanUp();
      changeMode(displayMode - 1)
      runningStatus = 1;
    }
  };

  //Up
  up.press = function()
  {
  };
  up.release = function() {
  };

  //Right
  right.press = function()
  {
  };
  right.release = function()
  {
    if (displayMode < 1)
    {
      runningStatus = 0;
      cleanUp();
      changeMode(displayMode + 1);
      runningStatus = 1;
    }
  };

  //Down
  down.press = function()
  {
  };
  down.release = function()
  {
  };

  //Set the pixi.js state
  state = play;

  // We need to start in a mode TODO make it random
  changeMode(baseMode);
  // Draw the cruicial part of the website...
  infoDraw();

  //Start the pixi.js loop
  app.ticker.add(delta => gameLoop(delta));
}