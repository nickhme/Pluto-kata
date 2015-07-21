/**
 * Created by nick on 21/07/2015.
 */
var Rover = require('./Rover');
var Pluto = require('./Pluto');

describe("The rover", function() {
    it("should move forwards one step", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("F")).toEqual([0,1,'N']);
    });
    it("should move backwards one step", function () {
        Rover.setup([0,1,'N']);
        expect(Rover.move("B")).toEqual([0,0,'N']);
    });
    it("should end up in the same place after a forward and back", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("FB")).toEqual([0,0,'N']);
    });
    it("should turn right from north and face east", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("R")).toEqual([0,0,'E']);
    });
    it("should turn left from north and face west", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("L")).toEqual([0,0,'W']);
    });
    it("should perform a full rotation", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("LLLL")).toEqual([0,0,'N']);
    });
    it("should perform a full rotation", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("RRRR")).toEqual([0,0,'N']);
    });
    it("should move forward 3 steps, face east, forward 1 step", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("FFFRF")).toEqual([1,3,'E']);
    });
    it("should end up in the right place after a complex instruction", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("FFFRFLB")).toEqual([1,2,'N']);
    });
});

describe("Pluto...", function() {
    it("should be the size we tell it to be, and should let you set the buggy's start position correctly", function () {
        Pluto.setup([10,10], [0,1,'N']);
        expect(Pluto._size).toEqual([10,10]);
        expect(Pluto._roverPosition).toEqual([0,1,'N']);
    });
    it("should wrap movements beyond its borders", function () {
        Rover.setup([0,1,'N']);
        expect(Rover.move("B")).toEqual([0,0,'N']);
    });
});