/**
 * Created by nick on 21/07/2015.
 */
var Pluto = {
    '_size' : [10,10],
    '_roverPosition' : [0,0,'N'],
    'obstacles' : [],
    'setup': function(size, roverPosition){
        this._size = size;
        this._roverPosition = roverPosition;
    },
    'tryMove' : function(moveString){

    }
}

module.exports = Pluto;