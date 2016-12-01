"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var device_1 = require('./device');
var Mobile /* is a device*/ = (function (_super) {
    __extends(Mobile /* is a device*/, _super);
    function Mobile /* is a device*/() {
        _super.call(this); // constructor of parent
        console.log('From Mobile');
    }
    Mobile /* is a device*/.prototype.plugCharger = function () {
        return this.chargerType = 'Plug';
    };
    return Mobile /* is a device*/;
}(device_1.Device));
exports.Mobile /* is a device*/ = Mobile /* is a device*/;
