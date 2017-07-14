"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//classes
var Color_1 = require("../lib/util/Color");
var RGBLight_1 = require("../lib/RGBLight");
var CONFIG = require("../config/configuration");
/**
 * Initialize RGBLed module
 *
 * @param app - express router
 */
exports.rgbled = function (router) {
    var led = new RGBLight_1.RGBLight(new Color_1.Color(0, 0, 0), CONFIG.RGBLed.pins);
    router.route("/led/color").post(function (request, response, next) {
        var red = parseInt(request.body.red) || 0;
        var green = parseInt(request.body.green) || 0;
        var blue = parseInt(request.body.blue) || 0;
        if (isNaN(red) || isNaN(green) || isNaN(blue)) {
            return response.status(400).json({ "message": "bad request" });
        }
        var color = new Color_1.Color(red, green, blue);
        led.changeColor(color);
        return response.status(200).json({ "message": "success" });
    });
};
