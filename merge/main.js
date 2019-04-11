function init(){

    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");

    //create object of monster
    this.monster = new Monster();

    //create a grid to play on

    this.grid = [,];
    this.walkables = [];

    for(let i = 0; i < 20; i++){
        this.grid[i] = [];
        for(let j = 0; j < 20; j++){
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

            this.grid[j][i].draw(colour);
        }
    }

    this.monster.draw(this.context);
}

//just for a random, can be removed
function getBool() {
    return Math.floor(Math.random() * Math.floor(10)) > 2;
}

function find(){
    var easyStar = new EasyStar.js();

    easyStar.setGrid(this.grid);
    easyStar.setAcceptableTiles(this.walkables);
    easyStar.enableSync();

    easyStar.findPath(this.monster.x, this.monster.y, 18, 18, function(path) {
        if (path != null) {
            //found path!
            console.log('found!');
            for(let i = 0; i < path.length; i++){

                moveMonster(path, 0);                
                
            }
        } else {
            //not found...
            console.log("error");
            alert('no path?');
        }
    });

    easyStar.calculate();
}

function moveMonster(path, i){
    setTimeout(function(){
        this.monster.setPos(path[i].x, path[i].y);
        if(i < path.length){
            i++;
            moveMonster(path, i);
        }
    }, 100);
   
}

setInterval(draw, 10);