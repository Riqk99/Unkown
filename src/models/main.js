var myGamePiece;

function startGame() {
    myGamePiece = new Player('test');
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.interval = setInterval(updateGameArea, 20); //updates elements of map
        this.pressed = false;
        //listen to keyboard events to move player
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
            this.pressed = false;
        });

        init(this.canvas, myGamePiece);
    },

    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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


/*function updatePostition()
{
    //updates position of player on the map
    let ctx = myGameArea.context;
    ctx.fillStyle = "red";
    ctx.fillRect(myGamePiece.positionX, myGamePiece.positionY, myGamePiece.width, myGamePiece.height);

}*/

function updateGameArea() {
    //myGameArea.clear();
    // loop to change coordinates of player
    if (myGameArea.key && myGameArea.key == 37 && !this.pressed) {
        myGamePiece.moveBackward(); 
        this.pressed = true;
        find();
    }

    if (myGameArea.key && myGameArea.key == 39 && !this.pressed) {
        myGamePiece.moveforward(); 
        this.pressed = true;
        find();
    }

    if (myGameArea.key && myGameArea.key == 38 && !this.pressed) {
        myGamePiece.moveDown(); 
        this.pressed = true;
        find();
    }

    if (myGameArea.key && myGameArea.key == 40 && !this.pressed) {
        myGamePiece.moveUp(); 
        this.pressed = true;
        find();
    }

    //updatePostition()
}

