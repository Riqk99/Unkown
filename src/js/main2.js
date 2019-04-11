function init()
{
    setupMap();
    startGame();
    setupMonsters();
}
const map = require('/The_Unkown/src/stages/Level1');
const mapImage = require('/The_Unkown/src/stages/Level1.png');
function setupMap(){
    document.createAttribute("div");
    document.getElementsByName("div").value = mapImage;

    function draw(context , map)
    {
        context.drawImage(map);
        for (var column = 0; column < map.columns ; column++)
        {
            for(var row=0; row < map.rows; rows++)
            {
                var tile = map.getTile(column,row);
                var x = column*map.tileSize;
                var y = row * map.tileSize;
                drawTile(tile,x,y);
            }
        }
    }

}
