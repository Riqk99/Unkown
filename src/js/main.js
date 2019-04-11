function init(canvas, player){

    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.player = player;
    this.easyStar = new EasyStar.js();
    this.instances = [];
    this.steps = 0;

    //create object of monster
    this.monster = new Monster();

    //create a grid to play on

    this.grid = [,];
    this.walkables = [];

    let x = this.canvas.width / 32;
    let y = this.canvas.height / 32;

    for(let i = 0; i < x; i++){
        this.grid[i] = [];
        for(let j = 0; j < y; j++){
            this.grid[i].push(new Block(getBool(), [32, 32], [i * 32, j * 32]));
        }
    }
   
    this.easyStar.setGrid(this.grid);

    var acceptable = [];

    for(let i = 0; i < this.grid.length; i++){
        acceptable = acceptable.concat(grid[i]);
    }

    this.easyStar.setAcceptableTiles(acceptable);

    draw();
    find();
}


//method is executed iteration
function draw(){
    this.steps++;
    if(steps % 10 == 0){
        this.monster.speedUp();
    }
    //clear all
    /*this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);


    this.player.draw(this.context);*/
    this.monster.draw(this.context);

    if(this.monster.x == this.player.positionX && this.monster.y == this.player.positionY){
        alert('lost!');
        clearInterval(this.interval);
    }
}

//just for a random, can be removed
function getBool() {
    return Math.floor(Math.random() * Math.floor(10)) > 2;
}

function find(){

    var instance = this.easyStar.findPath(this.monster.x, this.monster.y, this.player.positionX, this.player.positionY, function(path) {
        if (path != null) {
            //found path!
            this.instances.push([instance, true]);
            moveMonster(path, 0, instance); 
            

        } else {
            //not found...
            alert('no path?');
        }
    });

    this.easyStar.calculate();

    if(this.instances[0] != undefined){
        if(this.instances[this.instances.length - 1][1]){
            this.instances[this.instances.length - 1][1] = false;
            easyStar.cancelPath(this.instance);
        }
    }
}

function moveMonster(path, i, instance){
    var timeout;

    if(i == 0 || i == 1){
        timeout = 500 -this.monster.speed;
    }else{
        timeout = 5000 - this.monster.speed
    }

    setTimeout(function(){
        let inst = this.instances.filter(ins => ins[0] == instance);
        if(inst[0][1] === true){
            this.monster.setPos(path[i].x, path[i].y);
            if(i < path.length - 1){
            
                    i++;
                    moveMonster(path, i, instance);
            }else{
                
                for(let i = 0; i < this.instances.length; i++){
                    if(this.instances[i][0] == instance){
                        this.instances[i][1] = false;
                        break;
                    }
                }
            }
        }
    }, timeout);
   
}

var interval = setInterval(draw, 10);