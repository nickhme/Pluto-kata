/**
 * Created by nick on 21/07/2015.
 */
var Rover = require('./Rover');

describe("The rover", function() {
    it("should move forwards one step", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("F")).toEqual([0,1,'N']);
    });
    it("should move backwards one step", function () {
        Rover.setup([0,1,'N']);
        expect(Rover.move("B")).toEqual([0,0,'N']);
    });
    it("should turn right from north and face east", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("R")).toEqual([0,0,'E']);
    });
    it("should turn left from north and face west", function () {
        Rover.setup([0,0,'N']);
        expect(Rover.move("L")).toEqual([0,0,'W']);
    });
});