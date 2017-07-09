import * as rgbHex from 'rgb-hex';

export class Color {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
  hex?: string;

  constructor(red: number, green: number, blue: number, alpha?: number) {
    let self = this;
    
    self.red = red;
    self.green = green;
    self.blue = blue;

    if (typeof alpha == "undefined") {
      alpha = 1;
    }
    
    if (alpha == 1) {
      self.hex = "#" + rgbHex(red, green, blue); 
    } else {
      self.hex = "#" + rgbHex(red, green, blue, alpha);
    }

  }

}

export interface ColorPins {
  red: number
  green: number
  blue: number
}