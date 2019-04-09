
class Monster {
    damage = 10;
    speed = 10;
    x = 16;
    y = 16;   
    angle = 0;

    draw(context, canvas) {
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
    }

    move(x, y){
        this.x += x;
        this.y += y;
    }

    setPos(x, y){
        this.x = x;
        this.y = y;
    }
}
