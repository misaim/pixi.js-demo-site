# pixi.js demo site

A basic website using the [pixi.js](https://github.com/pixijs/pixi.js/) framework.
The site is intended to be a landing/home page with a range of contact information.
The background displays fullscreen pixi demos, swapable with arrow keys ( Press r to reset! ) running at 30FPS.

## setup.js
Contains pixi.js initialization code, alongside keyboard input (Used to swap between demos).

## main.js
Contains the main loop - used to call various demo update functions.

## helper.js
A large variety of helper functions used throughout multiple demos.

## index.html
Links all demo.js files. Demos appear in the order they are linked.

## Demo's:
Follow a simple structure:
* Demo-Specific Global variables
* demoSetup();, to initialize the any variables and attach demo container to main container
* demoUpdate();, called every x frames, where x is demoFrame global variable.
* demoClean();, used to deallocate any used variables (To maintain performance when swapping demo's)

Check out demos/example.js for more information!

## To add a demo:
1. Create a file, demo.js and link it within index.html
2. Write your demo ;)

This may change to become automatic one day in the future.

## Current Demos:
0. Pixel Gradient - a random color gradient
1. Pallete generator - Doesn't work very well at the moment...
2. Circle Draw - Draws random circles. Based off a sweater I saw in a store, beijing 2018.
