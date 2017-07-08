const five = require("johnny-five");

let board = new five.Board();

board.on("ready", () => {

  let led = new five.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
  });

  led.color("#ff0040");
  console.log(led.color());
});