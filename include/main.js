function gameLoop(delta)
{
  //Update the current game state:
  state(delta);
}

function play(delta)
{
  counter++;
  if (counter >= demoMode[currentDemo].updateFrame)
  {
    counter = 0;
    if (runningStatus)
    {
      demoMode[currentDemo].demoUpdate();
    }
  }
}
