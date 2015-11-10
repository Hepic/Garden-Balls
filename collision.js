function collision(x1, y1, w1, h1, x2, y2, w2, h2)
{
    if(x1+w1 < x2)  
        return false;

    else if(x1 > x2+w2)
        return false;

    else if(y1+h1 < y2)
        return false;
    
    else if(y1 > y2+h2)
        return false;
    
    return true;
}


function collision_bar_ball()
{
    var ball_x = ball.x - ball.radius,
        ball_y = ball.y - ball.radius,
        ball_width = 2 * ball.radius,
        ball_height = 2 * ball.radius


    for(var i=0; i<bars.length; ++i)
    {
        if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height, ball_x, ball_y, ball_width, ball_height))
        {
            if(bars[i].type == 'h') // horizontal bar
                ball.dy *= -1;

            else if(bars[i].type == 'v') // vertical bar
                ball.dx *= -1;
        }
    }
}


function ball_out_of_window()
{
    if(ball.x < 0  ||  ball.x > W  ||  ball.y < 0  ||  ball.y > H)
    {
        ball.x = W / 2;
        ball.y = H / 2;
    }
}


function bar_out_of_window()
{
    var ret = [];

    for(var i=0; i<bars.length; ++i)
    {
        if(bars[i].x < 0)
            ret[1] = true;

        else if(bars[i].x + bars[i].width > W)
            ret[2] = true;

        if(bars[i].y < 0)
            ret[3] = true;

        else if(bars[i].y + bars[i].height > H)
            ret[4] = true;
    }

    return ret;
}
