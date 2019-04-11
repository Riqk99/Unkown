class handGun {

    constructor() {
        this.Name = "HandGun";
        this.bullets = 0;
        this.maxbullets = 15;
        this.firerate = 1;
        this.bulletspeed = 1;
        this.bulletlife = 5;
    }

    get Bullets() {
        return this.bullets;
    }

    set setBullets(bullets) {
        this.bullets = bullets;  
    }

    /**
     * @return {number}
     */
    get FireRate() {
        return this.firerate;
    }

    get MaxDistance() {
        return this.maxdistance * 32;
    }

}
