import * as five from "johnny-five";
import { DiscoLeds } from "../config/configuration";

/**
 * Initialize Disco module
 *
 * @param router - express router
 */
export let disco = router => {

  let leds: any[] = [];
  let colors = ['green', 'yellow', 'red', 'white', 'blue'];

  colors.forEach(color => {
    let led = new five.Led(DiscoLeds.pins[color]);
    leds.push(led);
  });

  let whiteLed = leds[3];
  let createInterval = delay => {
    return setInterval(() => {
      whiteLed.on();
      setTimeout(() => {
        whiteLed.off();
      }, delay / 2);
    }, delay);
  }

  let delay = 100;
  let interval = createInterval(delay);

  setInterval(() => {
    delay = Math.random() * 3000;
    interval = createInterval(delay);
  }, 2000);

}