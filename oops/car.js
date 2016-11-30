"use strict";
var Car = (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.increaseSpeed = function () {
        this.wheels++;
        console.log('Increasing Speed - ' + this.wheels);
    };
    Car.prototype.applyBreaks = function () {
        this.wheels--;
        console.log('Applying Breaks - ' + this.wheels);
    };
    Car.prototype.whatsThis = function () {
        console.log('Whats this');
    };
    return Car;
}());
exports.Car = Car;
