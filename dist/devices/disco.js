"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var five = require("johnny-five");
var configuration_1 = require("../config/configuration");
/**
 * Initialize Disco module
 *
 * @param router - express router
 */
exports.disco = function (router) {
    var leds = [];
    var colors = ['green', 'yellow', 'red', 'white', 'blue'];
    colors.forEach(function (color) {
        var led = new five.Led(configuration_1.DiscoLeds.pins[color]);
        leds.push(led);
    });
    var whiteLed = leds[3];
    var createInterval = function (delay) {
        return setInterval(function () {
            whiteLed.on();
            setTimeout(function () {
                whiteLed.off();
            }, delay / 2);
        }, delay);
    };
    var delay = 100;
    var interval = createInterval(delay);
    setInterval(function () {
        delay = Math.random() * 3000;
        interval = createInterval(delay);
    }, 2000);
};
