"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var five = require("johnny-five");
var express = require("express");
var dotenv = require("dotenv");
var path = require("path");
var Color_1 = require("./lib/util/Color");
var RGBLight_1 = require("./lib/RGBLight");
dotenv.config();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));
var host = 'Server running on PORT *' + process.env.PORT;
var board = new five.Board();
board.on("ready", function () {
    var led = new RGBLight_1.RGBLight(new Color_1.Color(0, 0, 0), { "red": 11, "green": 10, "blue": 9 });
    app.route("/led/color").post(function (request, response, next) {
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
    app.use("/", express.static(path.join(__dirname, '../public')));
});
app.listen(process.env.PORT, function () {
    console.log(host);
});
