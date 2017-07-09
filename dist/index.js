"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var five = require("johnny-five");
var Color_1 = require("./lib/util/Color");
var RGBLight_1 = require("./lib/RGBLight");
var board = new five.Board();
var color = {
    "red": new Color_1.Color(255, 0, 0),
    "green": new Color_1.Color(0, 255, 0),
    "blue": new Color_1.Color(0, 0, 255),
    "purple": new Color_1.Color(255, 0, 255)
};
var led = new RGBLight_1.RGBLight(board, color.purple, { red: 11, green: 10, blue: 9 });
