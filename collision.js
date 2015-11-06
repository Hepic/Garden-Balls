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
        if(bars[i].type == 'h')    
        {
            if(collision(bars[i].x, bars[i].y, bars[i].width/3, bars[i].height, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy *= -1;
                ball.dx = -5;
            }

            else if(collision(bars[i].x, bars[i].y, 2*bars[i].width/3, bars[i].height, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy *= -1;
                ball.dx = 0;
            }
            
            else if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy *= -1;
                ball.dx = 5;
            }
        }
        
        else if(bars[i].type == 'v')    
        {
            if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height/3, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy = -5;
                ball.dx *= -1;
            }

            else if(collision(bars[i].x, bars[i].y, bars[i].width, 2*bars[i].height/3, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy = 0;
                ball.dx *= -1;
            }
            
            else if(collision(bars[i].x, bars[i].y, bars[i].width, bars[i].height, ball_x, ball_y, ball_width, ball_height))
            {
                ball.dy = 5;
                ball.dx *= -1;
            }
        }
    }
}

function collision_ball_window()
{
    if(ball.x < 0 || ball.x > W || ball.y < 0 || ball.y > H) //if out of bounds
    {
	ball.x = W/2; //reset ball
        ball.y = H/2;
        ball.oob = 1;
    }
}

