"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgbHex = require("rgb-hex");
var Color = (function () {
    function Color(red, green, blue, alpha) {
        var self = this;
        var hexcode = '';
        self.red = red;
        self.green = green;
        self.blue = blue;
        if (alpha === undefined) {
            alpha = 1;
        }
        if (alpha == 1) {
            hexcode = rgbHex(red, green, blue);
        }
        else {
            hexcode = rgbHex(red, green, blue, alpha);
        }
        self.hex = "#" + hexcode;
    }
    return Color;
}());
exports.Color = Color;
