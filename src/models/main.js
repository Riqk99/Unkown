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

        this.int = setInterval(updateGameArea, 200); //updates elements of map
        //listen to keyboard events to move player
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;  
        });
        init(this.canvas, myGamePiece);
    },

    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function updateGameArea() {
    // loop to change coordinates of player
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
}

