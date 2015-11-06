function draw_background()
{
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.fillStyle = 'grey';
    ctx.fill();
}

var fps = 60;
setTimeout(function render()
{
    ctx.clearRect(0, 0, W, H);   
    
    draw_background();
    draw_bars();
    ball.move();
    ball.draw();
    
    collision_bar_ball();
    collision_ball_window();

    if(ball.oob == 1)
	ball.oob = 0;

    requestAnimationFrame(render);
}, 1000/fps);




