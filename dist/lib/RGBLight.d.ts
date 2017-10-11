import { Color } from './util/Color';
import { ColorPins } from './util/Color';
export declare class RGBLight {
    led: any;
    color: Color;
    pins: ColorPins;
    constructor(color: Color, colorPins: ColorPins);
    changeColor(color: Color): void;
}
