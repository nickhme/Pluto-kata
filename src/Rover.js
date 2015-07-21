/**
 * Created by nick on 21/07/2015.
 */
var Rover = {
    'pluto' : require('./Pluto'),
    'setup' : function(pluto){
        this.pluto = pluto;
    },
    'move' : function(moveString){
        this.pluto.tryMove(moveString);
    }
};
module.exports = Rover;
