import * as bodyParser from "body-parser";
import * as five from "johnny-five";
import * as express from "express";
import * as dotenv from "dotenv";
import * as path from "path";

import { Color } from "./lib/util/Color";
import { RGBLight } from "./lib/RGBLight";
import * as CONFIG from "./config/configuration";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));
const host = 'Server running on PORT *' + process.env.PORT;

let board = new five.Board();
board.on("ready", () => {
  let led = new RGBLight(new Color(0, 0, 0), CONFIG.RGBLed.pins);
  app.route("/led/color").post((request, response, next) => {
    let red: number = parseInt(request.body.red) || 0;
    let green: number = parseInt(request.body.green) || 0;
    let blue: number = parseInt(request.body.blue) || 0;
    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      return response.status(400).json({ "message": "bad request" });
    }
    let color = new Color(red, green, blue);
    led.changeColor(color);
    return response.status(200).json({ "message": "success" });
  })
  app.use("/", express.static(path.join(__dirname, '../public')))
})

app.listen(process.env.PORT, () => {
  console.log(host);
});