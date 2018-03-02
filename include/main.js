function gameLoop(delta)
{
  //Update the current game state:
  state(delta);
}

function play(delta)
{
  counter++;
  if (counter >= updateFrame)
  {
    counter = 0;
    if (runningStatus)
    {
      switch (displayMode)
      {
        case baseMode:
          baseUpdate()
        break
        case palleteMode:
          palleteUpdate();
        break
        case circleMode:
          circleUpdate();
        break
      }
    }
  }



}
