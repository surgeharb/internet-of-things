"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//modules
var bodyParser = require("body-parser");
var five = require("johnny-five");
var express = require("express");
var dotenv = require("dotenv");
var path = require("path");
//devices
var rgbled_1 = require("./devices/rgbled");
var device = "";
if (typeof process.argv[2] == "undefined") {
    device = "";
}
else {
    device = process.argv[2];
}
dotenv.config();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));
var host = 'Server running on PORT *' + process.env.PORT;
if (device) {
    var board = new five.Board();
    board.on("ready", function () {
        app.listen(process.env.PORT, function () {
            console.log(host);
        });
        switch (device) {
            case "rgbled":
                rgbled_1.rgbled(app);
                app.use("/", express.static(path.join(__dirname, '../views/rgbled')));
                break;
            default:
                console.log("Error: invalid device specified");
                break;
        }
    });
}
else {
    console.log("Error: no device specified");
}
