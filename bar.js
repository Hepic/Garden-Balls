function Bar(x, y, type)
{
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 10;
    this.color = 'red';
    this.type = type;
}

Bar.prototype = {
    draw: function()
    {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    },

    fix_type: function()
    {
        if(this.type == 'v')
        {
            var temp = this.width;
            this.width = this.height;
            this.height = temp;
        }
    }
}



var bars = [];

bars.push(new Bar(W/3-40, 30, 'h'));
bars.push(new Bar(2*W/3-40, 30, 'h'));
bars.push(new Bar(W/3-40, H-30, 'h'));
bars.push(new Bar(2*W/3-40, H-30, 'h'));
bars.push(new Bar(30, H/3-40, 'v'));
bars.push(new Bar(30, 2*H/3-40, 'v'));
bars.push(new Bar(W-30, H/3-40, 'v'));
bars.push(new Bar(W-30, 2*H/3-40, 'v'));

for(var i=0; i<bars.length; ++i)
     bars[i].fix_type();



function draw_bars()
{
    for(var i=0; i<bars.length; ++i)
        bars[i].draw();
}

