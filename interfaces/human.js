"use strict";
var Human = (function () {
    function Human() {
    }
    Human.prototype.eat = function () {
    };
    Human.prototype.walk = function () {
    };
    Human.prototype.locate = function () {
        console.log('Human is in Home');
    };
    return Human;
}());
exports.Human = Human;
