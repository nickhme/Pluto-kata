/**
 * Created by nick on 21/07/2015.
 */
var Rover = require('./Rover');
var Pluto = require('./Pluto');

describe("The rover", function() {
    it("should move forwards one step", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("F");
        expect(Pluto._roverPosition).toEqual([0,1,'N']);
    });
    it("should move backwards one step", function () {
        Pluto._setup([10,10], [0,1,'N']);
        Rover.setup(Pluto);
        Rover.move("B");
        expect(Pluto._roverPosition).toEqual([0,0,'N']);
    });
    it("should end up in the same place after a forward and back", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("FB");
        expect(Pluto._roverPosition).toEqual([0,0,'N']);
    });
    it("should turn right from north and face east", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("R");
        expect(Pluto._roverPosition).toEqual([0,0,'E']);
    });
    it("should turn left from north and face west", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("L");
        expect(Pluto._roverPosition).toEqual([0,0,'W']);
    });
    it("should perform a full rotation", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("LLLL");
        expect(Pluto._roverPosition).toEqual([0,0,'N']);
    });
    it("should perform a full rotation", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("RRRR");
        expect(Pluto._roverPosition).toEqual([0,0,'N']);
    });
    it("should move forward 3 steps, face east, forward 1 step", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("FFFRF");
        expect(Pluto._roverPosition).toEqual([1,3,'E']);
    });
    it("should end up in the right place after a complex instruction", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("FFFRFLB");
        expect(Pluto._roverPosition).toEqual([1,2,'N']);
    });
    it("should be able to wrap around pluto if it leaves the borders", function () {
        Pluto._setup([10,10], [0,0,'N']);
        Rover.setup(Pluto);
        Rover.move("LF");
        expect(Pluto._roverPosition).toEqual([10,0,'W']);
    });
    it("should halt on an obstacle", function () {
        Pluto._setup([10,10], [0,0,'N'], [[0,2]]);
        Rover.setup(Pluto);
        Rover.move("FF");
        expect(Pluto._roverPosition).toEqual([0,1,'N']);
    });
});