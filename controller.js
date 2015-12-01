addEventListener('keydown', action_key_down, false);
addEventListener('keyup', action_key_up, false);

var keys = [];


function action_key_down(e)
{
    if(e.keyCode == 27)
        isPaused = !isPaused;

    keys[e.keyCode] = true;
}

function action_key_up(e)
{
    keys[e.keyCode] = false;
}


function action()
{
    check_bar = bar_out_of_window();
    check_bar_1 = collision_bar_bar();   
    
    for(var i=1; i<=4; ++i)
        check_bar[i] |= check_bar_1[i];

    for(var i=0; i<bars.length; ++i)
    {
    	if(bars[i].type == 'h')
	    {
            if(keys[37]  &&  !check_bar[1]) // press left arrow
            {
                bars[i].dx -= 0.5;             
                bars[i].dx = Math.max(bars[i].dx, -8);
            }

            else if(keys[39]  &&  !check_bar[2]) // press right arrow
            {
                bars[i].dx += 0.5;
                bars[i].dx = Math.min(bars[i].dx, 8);
            }

            else
                bars[i].dx = 0;
        }

	else if(bars[i].type == 'v')
	{
            if(keys[38]  &&  !check_bar[3]) // press up arrow
            {
                bars[i].dy -= 0.5;               
                bars[i].dy = Math.max(bars[i].dy, -8);
            }

            else if(keys[40]  &&  !check_bar[4]) // press down arrow
            {
                bars[i].dy += 0.5;
                bars[i].dy = Math.min(bars[i].dy, 8);
            }

	        else
                bars[i].dy = 0;
        }
    }
};


setInterval(action, 10);
