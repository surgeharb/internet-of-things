import * as five from "johnny-five";
import { Color } from "./util/Color";
import { ColorPins } from "./util/Color";

export class RGBLight {
  led: any
  color: Color
  pins: ColorPins

  constructor(color: Color, colorPins: ColorPins) {
    let self = this;

    self.color = color;
    self.led = new five.Led.RGB({ "pins": colorPins });
    self.led.color(color.hex);
  }

  changeColor(color: Color) {
    let self = this;
    
    self.led.color(color.hex);
  }

}