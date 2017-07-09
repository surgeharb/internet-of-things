"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var five = require("johnny-five");
var RGBLight = (function () {
    function RGBLight(board, color, colorPins) {
        this.color = color;
        board.on("ready", function () {
            var led = new five.Led.RGB({ "pins": colorPins });
            console.log("hex", color.hex);
            led.color(color.hex);
        });
    }
    return RGBLight;
}());
exports.RGBLight = RGBLight;
