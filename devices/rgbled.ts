//classes
import { Color } from "../lib/util/Color";
import { RGBLight } from "../lib/RGBLight";
import * as CONFIG from "../config/configuration";

/**
 * Initialize RGBLed module
 *
 * @param app - express router
 */
export let rgbled = router => {
  let led = new RGBLight(new Color(0, 0, 0), CONFIG.RGBLed.pins);

  router.route("/led/color").post((request, response, next) => {
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
}