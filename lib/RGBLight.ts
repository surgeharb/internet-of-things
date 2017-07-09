import * as five from "johnny-five";
import { Color } from "./util/Color";
import { ColorPins } from "./util/Color";

export class RGBLight {
  led: any
  board: any
  color: Color
  pins: ColorPins

  constructor(board: any, color: Color, colorPins: ColorPins) {
    this.color = color;

    board.on("ready", () => {
      let led = new five.Led.RGB({ "pins": colorPins });
      console.log("hex", color.hex);
      led.color(color.hex);
    })
    
  }

}