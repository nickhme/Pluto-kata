/**
 * Created by nick on 21/07/2015.
 */

var Rover = {
    'position' : [0,0,'N'],
    'setup' : function(config){
        this.position = config;
    },
    'move' : function(moveString){
        for ( var i = 0; i < moveString.length; i++ ) {
            var command = moveString.charAt(i);
            var xPos = this.position[0];
            var yPos = this.position[1];
            var direction = this.position[2];
            switch(command){
                case 'F' : this.position = [xPos, yPos + 1, direction]; break;
                case 'R' : this.position = [xPos + 1, yPos, 'E']; break;
                case 'B' : this.position = [xPos + 1, yPos - 1, 'S']; break;
                case 'L' : this.position = [xPos - 1, yPos, 'W']; break;
            }
        }
        return this.position;
    }
};
module.exports = Rover;
