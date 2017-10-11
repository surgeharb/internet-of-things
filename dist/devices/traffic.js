"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var five = require("johnny-five");
var configuration_1 = require("../config/configuration");
/**
 * Initialize TrafficLight module
 *
 * @param router - express router
 */
exports.traffic = function (router) {
    var leds = [];
    var colors = ['green', 'yellow', 'red', 'white', 'blue'];
    colors.forEach(function (color) {
        var led = new five.Led(configuration_1.DiscoLeds.pins[color]);
        leds.push(led);
    });
    var greenLed = leds[0];
    var yellowLed = leds[1];
    var redLed = leds[2];
    var trafficLights = function () {
        redLed.off();
        greenLed.on();
        setTimeout(function () {
            greenLed.off();
            yellowLed.on();
            setTimeout(function () {
                yellowLed.off();
                redLed.on();
            }, 1000);
        }, 4000);
    };
    trafficLights();
    setInterval(function () {
        trafficLights();
    }, 10000);
};
