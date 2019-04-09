class Block{

    walkable = false;
    size = [];
    position = [];

    constructor(walkable, size, position){
        this.walkable = walkable;
        this.size = size;
        this.position = position;
    }

    draw(colour){
        context.beginPath();
        context.rect(this.position[0], this.position[1], this.size[0], this.size[1], Math.PI * 2, false);
        context.fillStyle = colour;
        context.fill();
        context.closePath();
    }
}