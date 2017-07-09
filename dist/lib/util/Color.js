"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgbHex = require("rgb-hex");
var Color = (function () {
    function Color(red, green, blue, alpha) {
        var self = this;
        self.red = red;
        self.green = green;
        self.blue = blue;
        if (typeof alpha == "undefined") {
            alpha = 1;
        }
        if (alpha == 1) {
            self.hex = "#" + rgbHex(red, green, blue);
        }
        else {
            self.hex = "#" + rgbHex(red, green, blue, alpha);
        }
    }
    return Color;
}());
exports.Color = Color;
