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


function split_bar_ball(x1, y1, w1, h1, type, x2, y2, w2, h2, ball_obj)
{
    if(type == 'h')
    {
        if(x1+w1 > x2  &&  x1+w1 < x2+w2)
        {
            ball_obj.x = x1 + w1 + ball_obj.radius;

            if(ball_obj.dy < 0)
                ball_obj.y = y1 + h1 + ball_obj.radius;

            else if(ball_obj.dy > 0)
                ball_obj.y = y1 - ball.radius - ball_obj.radius;
        }

        else if(x1 > x2  &&  x1 < x2+w2)
        {
            ball_obj.x = x1 - ball_obj.radius;

            if(ball_obj.dy < 0)
                ball_obj.y = y1 + h1 + ball_obj.radius;

            else if(ball_obj.dy > 0)
                ball_obj.y = y1 - ball.radius - ball_obj.radius;
        }
    }

    else if(type == 'v')
    {
        if(y1+h1 > y2  &&  y1+h1 < y2+h2)
        {
            ball_obj.y = y1 + h1 + ball_obj.radius;

            if(ball_obj.dx < 0)
                ball_obj.x = x1 + w1 + ball_obj.radius;

            else if(ball_obj.dx > 0)
                ball_obj.x = x1 - ball.radius - ball_obj.radius;
        }

        else if(y1 > y2  &&  y1 < y2+h2)
        {
            ball_obj.y = y1 - ball_obj.radius;

            if(ball_obj.dx < 0)
                ball_obj.x = x1 + w1 + ball_obj.radius;

            else if(ball_obj.dx > 0)
                ball_obj.x = x1 - ball.radius - ball_obj.radius;
        }
    }
}


function collision_bar_ball()
{
    var ball_x = ball.x - ball.radius + ball.radius/3,
        ball_y = ball.y - ball.radius + ball.radius/3,
        ball_width = 3 * ball.radius,
        ball_height = 3 * ball.radius


    for(var i=0; i<bars.length; ++i)
    {
        if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height, ball_x, ball_y, ball_width, ball_height))
        {
            split_bar_ball(bars[i].x, bars[i].y, bars[i].width, bars[i].height, bars[i].type, ball_x-ball.radius/3, ball_y-ball.radius/3, ball_width-ball.radius, ball_height-ball.raduys, ball);


            if(bars[i].type == 'h') // horizontal bar
            {
                ball.dy *= -1;
                ball.dx += bars[i].dx;
            }

            else if(bars[i].type == 'v') // vertical bar
            {
                ball.dx *= -1;
                ball.dy += bars[i].dy;
            }


           if(ball.dx < -5) // control the maximum speed
                ball.dx = -5;

           else if(ball.dx > 5)
                ball.dx = 5;


           if(ball.dy < -5)
                ball.dy = -5;

           else if(ball.dy > 5)
                ball.dy = 5;


            audio();
            ++score;
        }
    }
}


function collision_bar_bar()
{
    var ret = [];

    for(var i=0; i<bars.length; ++i)
        for(var j=0; j<bars.length; ++j)
        {
            if(i == j)
                continue;

            if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height, bars[j].x, bars[j].y, bars[j].width, bars[j].height))
            {
                if(bars[i].type == 'h'  &&  bars[j].type == 'v')
                {
                    if(bars[i].x > bars[j].x  &&  bars[i].x < bars[j].x + bars[j].width)
                        ret[1] = true;

                    else if(bars[i].x + bars[i].width > bars[j].x  &&  bars[i].x + bars[i].width < bars[j].x + bars[j].width)
                        ret[2] = true;
                }

                else if(bars[i].type == 'v'  &&  bars[j].type == 'h')
                {
                    if(bars[i].y > bars[j].y  &&  bars[i].y < bars[j].y + bars[j].height)
                        ret[3] = true;

                    else if(bars[i].y + bars[i].height > bars[j].y  &&  bars[i].y + bars[i].height < bars[j].y + bars[j].height)
                        ret[4] = true;
                }
             }
        }

    return ret;
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
