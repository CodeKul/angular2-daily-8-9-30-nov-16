"use strict";
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.age = function () {
        return 1;
    };
    return Animal;
}());
exports.Animal = Animal;
