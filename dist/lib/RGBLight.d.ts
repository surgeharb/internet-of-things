import { Color } from "./util/Color";
import { ColorPins } from "./util/Color";
export declare class RGBLight {
    led: any;
    board: any;
    color: Color;
    pins: ColorPins;
    constructor(board: any, color: Color, colorPins: ColorPins);
}
