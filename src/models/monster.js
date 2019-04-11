
class Monster {
    damage = 10;
    x = 0;
    y = 0; 
    speed = 0;  

    draw(context, canvas) {
        context.beginPath();
        context.arc(this.x * 32 + 16, this.y * 32 + 16, 10, 0, Math.PI * 2, false);
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

    speedUp(){
        this.speed += 10;
    }
}
