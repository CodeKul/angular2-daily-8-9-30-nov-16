"use strict";
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
    return Starter;
}());
exports.Starter = Starter;
