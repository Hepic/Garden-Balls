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


function draw_pause_screen()
{
    ctx.beginPath();
    ctx.rect(0, 0, W+W1, H);
    ctx.fillStyle = 'grey';
    ctx.fill();

    ctx.font = '40pt Calibri';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.strokeText('Game Paused', (W+W1)/2 - 120, H/2);
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


function render_window()
{
    if(first_time)
    {
        ball.set_ball();
        first_time = false;
    }

    if(isPaused)
        draw_pause_screen();
    else
        render();

    requestAnimationFrame(render_window);
}
