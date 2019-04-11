class Player {
    
    constructor(name) {
        this.name = name;
        this.life = 100;
        this.level = 1;
        this.weapons = [];
        this.munitions = 0;
        this.bodyparts = 0;
        this.speed = 1;
        this.positionX = 5;
        this.positionY = 5;
        this.width = 30;
        this.height = 30;
        this.image = "red";

    }

    get getlevel() {
        return this.level;
    }

    get getHp() {
        return this.life;
    }

    get getBodyParts() {
        return this.bodyparts;
    }

    get getWeapons() {
        return this.weapons;
    }

    get getMuntions() {
        return this.munitions;
    }

    get getSpeed() {
        return this.speed;
    }

    get getPositionX() {
        return this.positionX;
    }

    get getPositionY() {
        return this.positionY;
    }

    level_up() {
        this.level += 1;
    }

    set set_life(life) {
        this.life = life;
    }

    set set_munitions(bullets) {
        this.munitions = bullets;
    }

    set set_speed(speed) {
        this.speed = speed;
    }

    set set_bodyparts(bodyparts) {
        this.bodyparts = bodyparts;
    }

    set set_weapons(weapons) {
        this.weapons = weapons;
    }

    setPosition(x, y) {
        this.positionX = x;
        this.positionY = y;
    }

    moveforward() {
        this.positionX += 1
    }

    moveBackward() {
        this.positionX -= 1
    }

    moveUp() {
        this.positionY += 1
    }

    moveDown() {
        this.positionY -= 1
    }

    draw(context){
        context.beginPath();
        context.arc(this.positionX * 32 + 16, this.positionY * 32 + 16, 10, 0, Math.PI * 2, false);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    }


}

