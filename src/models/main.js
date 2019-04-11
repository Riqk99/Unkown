var myGamePiece;
var myGameMap;


function startGame() {
    myGamePiece = new Player('test');
    myGameArea.start();
}

var myGameArea = {
    start : function() {
        myGameMap = new Map();
        myGameMap.loadMap(1);
        document.body.insertBefore(myGameMap.getMap(), document.body.childNodes[0]);
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.canvas.background = "./stages/Level1.png";
        this.interval = setInterval(updateGameArea, 200); //updates elements of map
        //listen to keyboard events to move player
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        });
        console.log(myGamePiece);
        init(this.canvas, myGamePiece);
    },

    clear : function(){
        //var canvas = myGameMap.getMap();
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
};


function draw(){

    //clear all
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.monster.draw(this.context);
}

function updateGameArea() {
    myGameArea.clear();
    // loop to change coordinates of player
    let x = myGamePiece.getPositionX;
    let y = myGamePiece.getPositionY;
    if (myGameArea.key && myGameArea.key == 37) {
        myGamePiece.moveBackward();
        find();
    }

    if (myGameArea.key && myGameArea.key == 39) {
        myGamePiece.moveforward();
        find();
    }

    if (myGameArea.key && myGameArea.key == 38) {
        myGamePiece.moveDown();
        find();
    }

    if (myGameArea.key && myGameArea.key == 40) {
        myGamePiece.moveUp();
        find();
    }

    let objects = [myGamePiece];

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

