addEventListener('keydown', action_key_down, false);
addEventListener('keyup', action_key_up, false);


var keys = [];


function action_key_down(e)
{
    keys[e.keyCode] = true;
    action();
}

function action_key_up(e)
{
    keys[e.keyCode] = false;
}


function action()
{
    for(var i=0; i<bars.length; ++i)
    {
        if(bars[i].type == 'h')
        {
            if(keys[37]) // press left arrow
                 bars[i].x -= 8;               
            
            else if(keys[39]) // press right arrow
                bars[i].x += 8;
        }

        else if(bars[i].type == 'v')
        {
            if(keys[38]) // press up arrow
                 bars[i].y -= 8;               
            
            else if(keys[40]) // press down arrow
                bars[i].y += 8;
        }
    }   
};   
