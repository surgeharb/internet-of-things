// modules
import * as bodyParser from "body-parser";
import * as five from "johnny-five";
import * as express from "express";
import * as dotenv from "dotenv";
import * as path from "path";

// devices
import { disco } from "./devices/disco";
import { rgbled } from "./devices/rgbled";
import { matrix } from "./devices/matrix";
import { traffic } from "./devices/traffic";

let device: string = "";
if (typeof process.argv[2] == "undefined") {
  device = ""
} else {
  device = process.argv[2]
}

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));
const host = 'Server running on PORT *' + process.env.PORT;

if (device) {
  let board = new five.Board();
  board.on("ready", function() {
    
    app.listen(process.env.PORT, () => {
      console.log(host);
    });

    switch (device) {
      case "rgbled":
        rgbled(app);
        app.use("/", express.static(path.join(__dirname, '../views/rgbled')))
        break;
      case "disco":
        disco(app);
        break;
      case "traffic":
        traffic(app);
        break;
      case "matrix":
        matrix(app);
        break;
      default:
        console.log("Error: invalid device specified");
        break;
    }

  })
} else {
  console.log("Error: no device specified");
}