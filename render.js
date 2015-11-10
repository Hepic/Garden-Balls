function draw_background()
{
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.fillStyle = 'cyan';
    ctx.fill();
}

(function render()
{
    ctx.clearRect(0, 0, W, H);   
    
    draw_background();
    draw_bars();
    move_bars();
    
    ball.move();
    ball.draw();
    
    collision_bar_ball();
    ball_out_of_window();

    requestAnimationFrame(render);
})();



