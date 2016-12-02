"use strict";
var tiger_1 = require('./abstractclasses/tiger');
var mobile_1 = require('./inheritance/mobile');
var device_1 = require('./inheritance/device');
var car_1 = require('./oops/car');
var Starter = (function () {
    function Starter() {
    }
    Starter.prototype.intro = function () {
        var i = 10;
        var car = new car_1.Car(4); // birth -> computer memory 
        car.applyBreaks();
        car.whatsThis();
        var m = new car_1.My();
    };
    Starter.prototype.inheritance = function () {
        var device = new device_1.Device();
        device.setMani = 'India';
        console.log('mani is ' + device.getMani);
        var mobile = new mobile_1.Mobile();
    };
    Starter.prototype.abstractClasses = function () {
        // let animal : Animal = new Animal();
        // animal.walk();
        var abc = new tiger_1.Tiger();
        abc.walk();
        abc.age();
        // animalTiger.runFast();
        var tiger = new tiger_1.Tiger();
        tiger.runFast();
        tiger.walk();
        tiger.age();
    };
    return Starter;
}());
exports.Starter = Starter;
