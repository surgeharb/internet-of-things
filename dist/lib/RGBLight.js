"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var five = require("johnny-five");
var RGBLight = (function () {
    function RGBLight(color, colorPins) {
        var self = this;
        self.color = color;
        self.led = new five.Led.RGB({ 'pins': colorPins });
        self.led.color(color.hex);
    }
    RGBLight.prototype.changeColor = function (color) {
        var self = this;
        self.led.color(color.hex);
    };
    return RGBLight;
}());
exports.RGBLight = RGBLight;
