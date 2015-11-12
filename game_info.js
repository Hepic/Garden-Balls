function show_time(x, y)
{
    ctx.font = '20pt Calibri';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'bluie';
    ctx.strokeText('Time: ' + Math.floor(time_sec/100) + ' sec', x, y);

    time_sec += 2.5;
}
