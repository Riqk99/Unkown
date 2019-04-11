class Player {
    
    constructor(name) {
        this.name = name;
        this.life = 100;
        this.level = 1;
        this.weapons = [];
        this.munitions = 0;
        this.bodyparts = 0;
        this.speed = 10;
        this.positionX = 500;
        this.positionY = 1800;
        this.width = 50;
        this.height = 50;
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

    get getWidth()
    {
        return this.width;
    }

    get getHeight()
    {
        return this.height;
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
        this.positionX +=(1*this.getSpeed)
    }

    moveBackward() {
        this.positionX -= (1*this.getSpeed)
    }

    moveUp() {
        this.positionY += (1*this.getSpeed)
    }

    moveDown() {
        this.positionY -= (1*this.getSpeed)
    }

    draw(context){
        context.beginPath();
        context.arc(this.positionX * 32 + 16, this.positionY * 32 + 16, 10, 0, Math.PI * 2, false);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    }


}

