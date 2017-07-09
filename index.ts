import * as five from "johnny-five";
import { Color } from "./lib/util/Color";
import { RGBLight } from "./lib/RGBLight";

let board = new five.Board();
let color = {
  "red": new Color(255, 0, 0),
  "green": new Color(0, 255, 0),
  "blue": new Color(0, 0, 255),
  "purple": new Color(255, 0, 255)
}

let led = new RGBLight(board, color.purple, { red: 11, green: 10, blue: 9 });