class bullet {
    constructor() {
        this.speed = 0;
        this.hit = 0;
        this.lifeTime = 0;

    }

    get Speed() {
        return this.speed;
    }

    get Hit() {
        return this.hit;
    }

    set setHit(hit) {
        this.hit = hit;
    }

    set setSpeed(speed) {
        this.speed = speed;
    }

    set setLifetime(time) {
        this.lifeTime = time;
    }

}