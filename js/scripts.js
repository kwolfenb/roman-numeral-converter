var decimalToRoman = function(num) {

  var arrayDecimal =  [1000, 500, 100, 50, 10, 5, 1];
  var arrayRoman =    ["M", "D", "C", "L", "X", "V", "I"];
  romanNumber = "";

  for (x = 0; x<arrayDecimal.length; x++) {
    if (num / arrayDecimal[x] >= 4 && num / arrayDecimal[x] < 5) {
      romanNumber += arrayRoman[x] + arrayRoman[x - 1];
      num = num - (arrayDecimal[x] * 4);
      }

    else if (num / arrayDecimal[x] >= 3 && num / arrayDecimal[x] < 4) {
      romanNumber += arrayRoman[x].repeat(3);
      num = num - (arrayDecimal[x] * 3);
      }

    else if (num / arrayDecimal[x] >= 2 && num / arrayDecimal[x] < 3) {
      romanNumber += arrayRoman[x].repeat(2);
      num = num - (arrayDecimal[x] * 2);
      }

    else if (num / arrayDecimal[x] >= 1 && num / arrayDecimal[x] < 2){
      romanNumber += arrayRoman[x];
      num = num - arrayDecimal[x];
      }
    if (num / arrayDecimal[x] >= .9 && num / arrayDecimal[x] < 1 && x !==3 && x!==5 && x !==1) {
      romanNumber += arrayRoman[x+2] + arrayRoman[x];
      num = num - (arrayDecimal[x]*.9);
      }

    }
  return(romanNumber)
  }

$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputNumber = $("#DecimalNumber").val();
    $("#output").text(decimalToRoman(inputNumber));

  });
});
