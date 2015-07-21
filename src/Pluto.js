/**
 * Created by nick on 21/07/2015.
 */
var Pluto = {
    '_size' : [10,10],
    '_roverPosition' : [0,0,'N'],
    '_obstacles' : [],
    '_setup': function(size, roverPosition, obstacles){
        this._size = size;
        this._roverPosition = roverPosition;
        if(obstacles)
            this._obstacles = obstacles;
    },
    '_moveAfterObstaclesCheck' : function(newPosition){
        var xPos = newPosition[0];
        var yPos = newPosition[1];

        var itsAnObstacle = false;
        for ( var i = 0; i < this._obstacles.length; i++ ) {
            var obstacleX = this._obstacles[i][0];
            var obstacleY = this._obstacles[i][1];

            if(xPos === obstacleX && yPos === obstacleY)
                itsAnObstacle = true;
        }
        if(itsAnObstacle)
            alert("its an obstacle");
        else
            this._roverPosition = newPosition;
    },
    'tryMove' : function(moveString){
        for ( var i = 0; i < moveString.length; i++ ) {
            var command = moveString.charAt(i);
            var xPos = this._roverPosition[0];
            var yPos = this._roverPosition[1];
            var xMax = this._size[0];
            var yMax = this._size[1];

            var direction = this._roverPosition[2];

            if(command === 'F'){
                if(direction === 'N'){
                    if(yPos === yMax)
                        this._moveAfterObstaclesCheck([xPos, 0, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos, yPos + 1, direction]);
                } else if(direction === 'E'){
                    if(xPos === xMax)
                        this._moveAfterObstaclesCheck([0, yPos, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos + 1, yPos, direction]);
                } else if(direction === 'S'){
                    if(yPos === 0)
                        this._moveAfterObstaclesCheck([xPos, yMax, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos, yPos - 1, direction]);
                } else if(direction === 'W'){
                    if(xPos === 0)
                        this._moveAfterObstaclesCheck([xMax, yPos, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos - 1, yPos, direction]);
                }
            } else if(command === 'B'){
                if(direction === 'N'){
                    if(yPos === 0)
                        this._moveAfterObstaclesCheck([xPos, yMax, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos, yPos - 1, direction]);
                } else if(direction === 'E'){
                    if(xPos === 0)
                        this._moveAfterObstaclesCheck([xMax, yPos, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos - 1, yPos, direction]);
                } else if(direction === 'S'){
                    if(yPos == yMax)
                        this._moveAfterObstaclesCheck([xPos, 0, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos, yPos + 1, direction]);
                } else if(direction === 'W'){
                    if(xPos = xMax)
                        this._moveAfterObstaclesCheck([0, yPos, direction]);
                    else
                        this._moveAfterObstaclesCheck([xPos + 1, yPos, direction]);
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