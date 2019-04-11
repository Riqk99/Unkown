var myGamePiece;
var myGamePiece2;
var myGameMap;

function startGame() {
    myGameArea.start();
    myGamePiece = new Player('test');
    myGamePiece2 = new Player('test');
}

var myGameArea = {
    start : function() {
        myGameMap = new Map();
        myGameMap.loadMap(1);
        document.body.insertBefore(myGameMap.getMap(), document.body.childNodes[0]);
        document.getElementsByName("canvas").background = "./stages/Level1.png";
        this.interval = setInterval(updateGameArea, 20); //updates elements of map
        //listen to keyboard events to move player
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },

    clear : function(){
        var canvas = myGameMap.getMap();
        canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    }
};


/*function draw(){

    //clear all
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //draw grid
    let map = Level1();
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
}*/

function updateGameArea() {
    myGameArea.clear();
    // loop to change coordinates of player
    let x = myGamePiece.getPositionX;
    let y = myGamePiece.getPositionY;
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.moveBackward() }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.moveforward(); }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.moveDown(); }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.moveUp(); }
    let objects = [myGamePiece, myGamePiece2];

    myGameMap.mapBoundriesCheck(myGamePiece);
    for(var i = 0; i < myGameMap.walls.length; i++)
    {
        myGameMap.walls[i].collide(myGamePiece , x , y)

    }

    for(var i= 0; i < objects.length; i++)
    {
        myGameMap.updatePosition(myGameMap.getMap(), objects[i] );
    }

}

