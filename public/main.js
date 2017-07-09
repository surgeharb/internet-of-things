let red = 150;
let green = 109;
let blue = 217;

let update = () => {
  $("#change").css({
    "background-color": "rgb(" + red + "," + green + "," + blue + ")"
  })
  $.ajax({
    "url": "/led/color",
    "method": "POST",
    "data": {
      "red": red,
      "green": green,
      "blue": blue
    }
  })
}

let changeRed = number => {
  if (number < 0 || number > 255) return false;
  $("#valRed").text(number);
  red = number;
  update();
}

let changeGreen = number => {
  if (number < 0 || number > 255) return false;
  $("#valGreen").text(number);
  green = number;
  update();
}

let changeBlue = number => {
  if (number < 0 || number > 255) return false;
  $("#valBlue").text(number);
  blue = number;
  update();
}

changeRed(red);
changeGreen(green);
changeBlue(blue);
update();