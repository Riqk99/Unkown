class ObjectsColision{
    constructor(xmin , ymin, xmax , ymax ,  monster)
    {
        this.width = 80;
        this.height = 80;
        this.xmin = 3200*xmin;
        this.ymin = 3200*ymin;
        this.xmax = 3200*xmax;
        this.ymax = 3200*ymax;
        if(monster != null)
            this.type = Monster(monster);
    }

    collide(player , x, y )
    {
        return;
        let playerToCollide = new Player();
        playerToCollide = player;

        if ((this.xmin < player.getPositionX + player.getWidth &&
            this.xmin + this.width > player.getPositionX &&
            this.ymin < player.getPositionY + player.getHeight &&
            this.ymin + this.height > player.getPositionY) && this.type == null)
        {
            console.log("kan er niet door");
            player.setPosition(x,y );
        }
        else if ((this.xmin < player.getPositionX + player.getWidth &&
            this.xmin + this.width > player.getPositionX &&
            this.ymin < player.getPositionY + player.getHeight &&
            this.ymin + this.height > player.getPositionY) && this.type != null)
        {
            console.log("you got hit");
            player.set_life(this.type.attack());
        }

        if ((this.xmax < player.getPositionX + player.getWidth &&
            this.xmax + this.width > player.getPositionX &&
            this.ymax < player.getPositionY + player.getHeight &&
            this.ymax + this.height > player.getPositionY) && this.type == null)
        {
            console.log("kan er niet door");
            player.setPosition(x,y );
        }
        else if ((this.xmax < player.getPositionX + player.getWidth &&
            this.xmax + this.width > player.getPositionX &&
            this.ymax < player.getPositionY + player.getHeight &&
            this.ymax + this.height > player.getPositionY) && this.type != null)
        {
            console.log("you got hit");
            player.set_life(this.type.attack());
        }

    }
}
