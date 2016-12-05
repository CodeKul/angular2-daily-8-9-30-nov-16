"use strict";
var Generics = (function () {
    function Generics() {
    }
    Generics.prototype.assignType = function (anyType) {
        console.log('Anytype is ' + anyType);
        this.anyType = anyType;
    };
    Generics.prototype.getAnyType = function () {
        return this.anyType;
    };
    return Generics;
}());
exports.Generics = Generics;
