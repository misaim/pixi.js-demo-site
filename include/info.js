// Draws the important part of the website - the gray boxes with information.

let headerStyle = new TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  //stroke: '#000000',
  //strokeThickness: 4,
});

let footerStyle = new TextStyle({
  fontFamily: "Arial",
  fontSize: 12,
  fill: "white",
  //stroke: '#000000',
  //strokeThickness: 4,
});

//Global, so we can access it from other demos.
let footer = new Text("", footerStyle);

// Left or Right - defaults to left.
let footerLocation = 0;

function infoDraw()
{
  let centerBox = new Graphics();
  let modeBox = new Graphics();
  let header = new Text("Placeholder Text", headerStyle);
  mainScene.addChild(centerBox);
  mainScene.addChild(modeBox);
  mainScene.addChild(header);
  mainScene.addChild(footer);

  centerBox.visible = false;
  header.visible = false;
  footer.visible = false;

  header.x = window.innerWidth/2 - header.width/2;
  header.y = window.innerHeight/(5);
  footer.x = 20;
  footer.y = window.innerHeight - footer.height - 20;

  if (darkMode)
  {
    centerBox.beginFill(0xFFFFFF);
    centerBox.alpha = 0.7;
    headerStyle.fill = "black";
  }
  else
  {
    centerBox.beginFill(0x333333);
    centerBox.alpha = 0.5;
    headerStyle.fill = "white";
  }
  //centerBox.lineStyle(6, 0x000000, 1);
  centerBox.drawRect(0, 0, window.innerWidth - (window.innerWidth*0.4), (window.innerHeight*0.4));
  centerBox.endFill();
  centerBox.x = window.innerWidth/2 - centerBox.width/2;
  centerBox.y = 0.1 * window.innerHeight;

  if (!mobileMode)
  {
    footer.visible = true;

    if (darkMode)
    {
      modeBox.beginFill(0xFFFFFF);
      modeBox.alpha = 0.7;
      footerStyle.fill = "black";
    }
    else
    {
      modeBox.beginFill(0x333333);
      modeBox.alpha = 0.5;
      footerStyle.fill = "white";
    }
    //modeBox.lineStyle(6, 0x000000, 1);
    modeBox.drawRect(0, 0, footer.width + 20, footer.height + 10);
    modeBox.endFill();
    modeBox.x = 15;
    modeBox.y = window.innerHeight - modeBox.height - 15;
  }
}
