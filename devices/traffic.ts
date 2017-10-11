import * as five from 'johnny-five';
import { DiscoLeds } from '../config/configuration';

/**
 * Initialize TrafficLight module
 *
 * @param router - express router
 */
export let traffic = router => {

  let leds: any[] = [];
  let colors = ['green', 'yellow', 'red', 'white', 'blue'];

  colors.forEach(color => {
    let led = new five.Led(DiscoLeds.pins[color]);
    leds.push(led);
  });

  let greenLed = leds[0];
  let yellowLed = leds[1];
  let redLed = leds[2];

  let trafficLights = () => {
    redLed.off();
    greenLed.on();
    setTimeout(() => {
      greenLed.off();
      yellowLed.on();
      setTimeout(() => {
        yellowLed.off();
        redLed.on();
      }, 1000);
    }, 4000);
  };


  // make infinite interval every 10 seconds starting at 0
  trafficLights();
  setInterval(() => {
    trafficLights();
  }, 10000);

}