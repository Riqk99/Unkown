function init(){

    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");

    //create object of monster
    this.monster = new Monster();

    //create a grid to play on

    this.grid = [,];
    this.walkables = [];

    for(let i = 0; i < 10; i++){
        this.grid[i] = [];
        for(let j = 0; j < 10; j++){
            this.grid[i].push(new Block(getBool(), [32, 32], [i * 32, j * 32]));
        }
    }

    draw();
    find();
}


//method is executed iteration
function draw(){
    //clear all
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //draw grid
    for(let i = 0; i < this.grid.length - 1; i++){
        for(let j = 0; j < this.grid[i].length - 1; j++){
            var colour;
            if(grid[i][j].walkable){
                this.walkables.push(this.grid[i][j]);
                colour = 'black';
            } else{
                colour = 'red';
            }

            this.grid[i][j].draw(colour);
        }
    }

    this.monster.draw(this.context);
}

//just for a random, can be removed
function getBool() {
    return Math.floor(Math.random() * Math.floor(10)) > 1;
}

function find(){
    var easyStar = new EasyStar.js();

    easyStar.setGrid(this.grid);
    easyStar.setAcceptableTiles(this.walkables);
    easyStar.enableSync();

    easyStar.findPath(0, 0, 8, 8, function(path) {
        if (path != null) {
            //found path!
            console.log('found!');
            for(let i = 0; i < path.length; i++){
                doSetTimeout(path[i]);
                
                
                
            }
        } else {
            //not found...
            console.log("error");
            alert('no path?');
        }
    });

    easyStar.instanceQueue = [1,1];

    easyStar.calculate();
}



function doSetTimeout(path){
    setTimeout(function () {
        this.monster.setPos(path.x * 32 + 8, path.y * 32 + 8);      
    }, 1000);
}

setInterval(draw, 10);