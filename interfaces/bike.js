"use strict";
var Bike = (function () {
    function Bike() {
    }
    Bike.prototype.accelerate = function () {
    };
    Bike.prototype.applyBrakes = function () {
    };
    Bike.prototype.locate = function () {
        console.log('Bike is on road');
    };
    return Bike;
}());
exports.Bike = Bike;
