function Ball(x, y, type)
{
    this.x = x;
    this.y = y;
    this.type = type;
    this.radius = null;
    this.dx = 5;
    this.dy = 5;
    this.image_x = null;
    this.image_y = null;
    this.width = null;
    this.height = null;
    this.background_image = background_image;
}

Ball.prototype = {
    set_ball: function()
    {
        if(this.type == 'tennis_ball')
        {
            this.image_x = 384;
            this.image_y = 1205;
            this.radius = 10;
        }

        else if(this.type == 'basket_ball')
        {
            this.image_x = 0;
            this.image_y = 1205;
            this.radius = 20;
        }

        else if(this.type == 'soccer_ball')
        {
            this.image_x = 256;
            this.image_y = 1205;
            this.radius = 15;
        }
    },
    
    draw: function()
    {
        ctx.drawImage(this.background_image, this.image_x, this.image_y, 128, 128, this.x, this.y, 2*this.radius, 2*this.radius);
    },

    move: function()
    {
        this.x += this.dx;
        this.y += this.dy;
    }
};



var ball = new Ball(W/2, H/2, 'tennis_ball');
