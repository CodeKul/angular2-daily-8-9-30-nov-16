"use strict";
var generics_1 = require('./generics/generics');
var bike_1 = require('./interfaces/bike');
var human_1 = require('./interfaces/human');
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
    Starter.prototype.interfaces = function () {
        var human = new human_1.Human();
        human.eat();
        human.locate();
        var bike = new bike_1.Bike();
        bike.accelerate();
        bike.locate();
    };
    Starter.prototype.generics = function () {
        //STL =Standarad Templating Lib
        var anyString = new generics_1.Generics();
        anyString.assignType('Android');
        console.log('String type - ' + anyString.getAnyType());
        var anyInt = new generics_1.Generics();
        anyInt.assignType();
        console.log('Number type - ' + anyInt.getAnyType());
    };
    return Starter;
}());
exports.Starter = Starter;
