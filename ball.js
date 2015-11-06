function Ball(x, y)
{
    this.x = x;
    this.y = y;
    this.color = 'black';
    this.radius = 10;
    this.dx = 3;
    this.dy = 3;
    this.oob = 0;
}

Ball.prototype = {
    draw: function()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    },
             
    move: function()
    {
        this.x += this.dx;
        this.y += this.dy;
    }
};


var ball = new Ball(W/2, H/2);


