function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        direction(0, -1.9);
    }

    else if(keyCode === DOWN_ARROW)
    {
        direction(0, 1.9);
    }

    else if(keyCode === RIGHT_ARROW)
    {
        direction(1.9, 0);
    }

    else if(keyCode === LEFT_ARROW)
    {
        direction(-1.9, 0);
    }
}