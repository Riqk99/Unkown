
class Monster {
    damage = 10;
    x = 0;
    y = 0;
    speed = 0;

    draw(context, canvas) {
        context.beginPath();
        context.arc(this.x * 100 + 50, this.y * 100 + 50, 30, 0, Math.PI * 2, false);
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

    attack()
    {
        return 100;
    }

    speedUp(){
        this.speed += 10;
    }
}
