/**
 * Created by nick on 21/07/2015.
 */
var Pluto = {
    '_size' : [10,10],
    '_roverPosition' : [0,0,'N'],
    'obstacles' : [],
    '_setup': function(size, roverPosition){
        this._size = size;
        this._roverPosition = roverPosition;
    },
    'tryMove' : function(moveString){
        for ( var i = 0; i < moveString.length; i++ ) {
            var command = moveString.charAt(i);
            var xPos = this._roverPosition[0];
            var yPos = this._roverPosition[1];
            var direction = this._roverPosition[2];

            if(command === 'F'){
                if(direction === 'N'){
                    this._roverPosition = [xPos, yPos + 1, direction];
                } else if(direction === 'E'){
                    this._roverPosition = [xPos + 1, yPos, direction];
                } else if(direction === 'S'){
                    this._roverPosition = [xPos, yPos - 1, direction];
                } else if(direction === 'W'){
                    this._roverPosition = [xPos - 1, yPos, direction];
                }
            } else if(command === 'B'){
                if(direction === 'N'){
                    this._roverPosition = [xPos, yPos - 1, direction];
                } else if(direction === 'E'){
                    this._roverPosition = [xPos - 1, yPos, direction];
                } else if(direction === 'S'){
                    this._roverPosition = [xPos, yPos + 1, direction];
                } else if(direction === 'W'){
                    this._roverPosition = [xPos + 1, yPos, direction];
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
                this._roverPosition = [xPos, yPos, newDirection];
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
                this._roverPosition = [xPos, yPos, newDirection];
            }
        }
        return this._roverPosition;
    }
}

module.exports = Pluto;