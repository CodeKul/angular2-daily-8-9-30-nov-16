"use strict";
var Device = (function () {
    function Device() {
        console.log('From Device');
    }
    Device.prototype.powerUp = function (power) {
        this.power = power;
    };
    Object.defineProperty(Device.prototype, "setMani", {
        set: function (mani) {
            this.mani = mani;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "getMani", {
        get: function () {
            return this.mani;
        },
        enumerable: true,
        configurable: true
    });
    return Device;
}());
exports.Device = Device;
