var map_keys = [];

onkeydown = onkeyup = function(e)
{
    e = e || event;
    map_keys[e.keyCode] = e.type == 'keydown'; //if keydown 'true' else 'false'

    for(var i=0; i<bars.length; ++i)
    {
        if(bars[i].type == 'h')
        {
	    if(map_keys[37]) // press left arrow
	        bars[i].x -= 10;

	    else if(map_keys[39]) // press right arrow
		bars[i].x += 10; 
	}

	else if(bars[i].type == 'v') // press up arrow
        {
	    if(map_keys[38])
		bars[i].y -= 8;

	    else if(map_keys[40]) // press down arrow
	        bars[i].y += 8;
	}
    }
}

