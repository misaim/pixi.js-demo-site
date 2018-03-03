// Various helper functions

//Returns a number between 0 - 360, as we use HSV color space.
function randomColor()
{
  let color = 0;
  color = Math.floor((Math.random() * 360) + 1);
  return color;
}

// Example code for collision detection - taken from pixi.js github examples
function contain(sprite, container) {

  let collision = undefined;

  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}

//The `hitTestRectangle` function, also from pixi.js examples
function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};


// instuctions not included
function randomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Sets up keyboard interupts - taken from pixi.js github
function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

/**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */
function hsvToRgb(h, s, v) {
  var r, g, b;
  var i;
  var f, p, q, t;

  // Make sure our arguments stay in-range
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s));
  v = Math.max(0, Math.min(100, v));

  // We accept saturation and value arguments from 0 to 100 because that's
  // how Photoshop represents those values. Internally, however, the
  // saturation and value are calculated from a range of 0 to 1. We make
  // That conversion here.
  s /= 100;
  v /= 100;

  if(s == 0) {
    // Achromatic (grey)
    r = g = b = v;
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  h /= 60; // sector 0 to 5
  i = Math.floor(h);
  f = h - i; // factorial part of h
  p = v * (1 - s);
  q = v * (1 - s * f);
  t = v * (1 - s * (1 - f));

  switch(i) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = v;
      b = p;
      break;

    case 2:
      r = p;
      g = v;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = v;
      break;

    case 4:
      r = t;
      g = p;
      b = v;
      break;

    default: // case 5:
      r = v;
      g = p;
      b = q;
  }
  // Original Return
  //return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  return (Math.round(r * 255) << 16) + ( Math.round(g * 255) << 8 ) + Math.round(b * 255);
}
