"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animal_1 = require('./animal');
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        _super.apply(this, arguments);
    }
    Tiger.prototype.walk = function () {
        console.log('Tiger is walking');
    };
    Tiger.prototype.runFast = function () {
        console.log('Tiger is running fast');
    };
    Tiger.prototype.age = function () {
        return _super.prototype.age.call(this) + 50;
    };
    return Tiger;
}(animal_1.Animal));
exports.Tiger = Tiger;
