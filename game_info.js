function show_score(x, y)
{
    ctx.font = '20pt Calibri';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.strokeText('Score: ' + score, x, y);
}


function show_time(x, y)
{
    ctx.font = '20pt Calibri';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.strokeText('Time: ' + Math.floor(time_sec/100) + ' sec', x, y);

    time_sec += 2.5;
}

function show_pause_screen()
{
    ctx.beginPath();
    ctx.rect(0, 0, W+W1, H);
    ctx.fillStyle = 'grey';
    ctx.fill();

    ctx.font = '40pt Calibri';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.strokeText('Game Paused', 420, 150);
}
