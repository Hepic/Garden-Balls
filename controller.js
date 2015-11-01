addEventListener('keydown', action, false);

function action(e)
{
    for(var i=0; i<bars.length; ++i)
    {
        if(bars[i].type == 'h')
        {
            if(e.keyCode == 37) // press left arrow
                 bars[i].x -= 8;               
            
            else if(e.keyCode == 39) // press right arrow
                bars[i].x += 8;
        }

        else if(bars[i].type == 'v')
        {
            if(e.keyCode == 38) // press up arrow
                 bars[i].y -= 8;               
            
            else if(e.keyCode == 40) // press down arrow
                bars[i].y += 8;
        }
    }   
}   
