import * as rgbHex from 'rgb-hex';

export class Color {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
  hex?: string;

  constructor(red: number, green: number, blue: number, alpha?: number) {
    let self = this;
    let hexcode = '';

    self.red = red;
    self.green = green;
    self.blue = blue;

    if (alpha === undefined) {
      alpha = 1;
    }

    if (alpha == 1) {
      hexcode = rgbHex(red, green, blue);
    } else {
      hexcode = rgbHex(red, green, blue, alpha);
    }

    self.hex = `#${hexcode}`;
  }

}

export interface ColorPins {
  red: number
  green: number
  blue: number
}