function draw_background()
{
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.fillStyle = 'cyan';
    ctx.fill();

    ctx.beginPath();
    ctx.rect(W, 0, W1, H);
    ctx.fillStyle = '#669999';
    ctx.fill();
}

function start_render()
{
    if(!isPaused)
	render();
    else
	show_pause_screen();

    requestAnimationFrame(start_render);
}

function render()
{
    ctx.clearRect(0, 0, W, H);   
    
    draw_background();
    draw_bars();
    move_bars();
    
    ball.move();
    ball.draw();

    collision_bar_ball();
    ball_out_of_window();
    
    show_time(W + 20, 30);   
    show_score(W + 20, 80);
};

if(run_game)
    start_render();
