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

            if(command === 'F'){
                if(direction === 'N'){
                    this.position = [xPos, yPos + 1, direction];
                } else if(direction === 'E'){
                    this.position = [xPos + 1, yPos, direction];
                } else if(direction === 'S'){
                    this.position = [xPos, yPos - 1, direction];
                } else if(direction === 'W'){
                    this.position = [xPos - 1, yPos, direction];
                }
            } else if(command === 'B'){
                if(direction === 'N'){
                    this.position = [xPos, yPos - 1, direction];
                } else if(direction === 'E'){
                    this.position = [xPos - 1, yPos, direction];
                } else if(direction === 'S'){
                    this.position = [xPos, yPos + 1, direction];
                } else if(direction === 'W'){
                    this.position = [xPos + 1, yPos, direction];
                }
            } else if(command === 'L'){
                var newDirection;
                if(direction === 'N'){
                    newDirection = 'W';
                } else if(direction === 'E'){
                    newDirection = 'N';
                } else if(direction === 'S'){
                    newDirection = 'E';
                } else if(direction === 'W'){
                    newDirection = 'S';
                }
                this.position = [xPos, yPos, newDirection];
            } else if(command === 'R'){
                var newDirection;
                if(direction === 'N'){
                    newDirection = 'E';
                } else if(direction === 'E'){
                    newDirection = 'S';
                } else if(direction === 'S'){
                    newDirection = 'W';
                } else if(direction === 'W'){
                    newDirection = 'N';
                }
                this.position = [xPos, yPos, newDirection];
            }
        }
        return this.position;
    }
};
module.exports = Rover;
