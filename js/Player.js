function Player()
{
    // set up player's starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // this sets up the player's dimesion
    this.width = 100;
    this.height = 100;

    /// set up the player's color
    this.color = "#ff0000";

    this.vx = 0;
    this.vy = 0;

    this.draw = function()
    {
        context.save();
            context.fillStyle = this.color
            context.translate(this.x,this.y);
            context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx
        this.y += this.vy
    }

}