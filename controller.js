addEventListener('keydown', action_key_down, false);
addEventListener('keyup', action_key_up, false);


var keys = [];


function action_key_down(e)
{
    keys[e.keyCode] = true;
}

function action_key_up(e)
{
    keys[e.keyCode] = false;
}


function action()
{
    check_bar = bar_out_of_window(bars[i]);
    

    for(var i=0; i<bars.length; ++i)
    {
        if(bars[i].type == 'h')
        {
            if(keys[37]  &&  !check_bar[1]) // press left arrow
                 bars[i].x -= 8;               
            
            else if(keys[39]  &&  !check_bar[2]) // press right arrow
                bars[i].x += 8;
        }

        else if(bars[i].type == 'v')
        {
            if(keys[38]  &&  !check_bar[3]) // press up arrow
                 bars[i].y -= 8;               
            
            else if(keys[40]  &&  !check_bar[4]) // press down arrow
                bars[i].y += 8;
        }
    }   
};   


setInterval(action, 10);
