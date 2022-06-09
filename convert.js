


var lengths = [
  "m", "Pm", "Gm", "Mm", "km", "hm", "dam", "dm", "cm", "mm", "um", "nm", "pm", "fm", "ft", "in", "yd", "mile", "nautical mile"
];

var mass = [
  "g", "Pg", "Tg", "Gg", "Mg", "kg", "hg", "dag", "mg", "ug", "ng", "tonne", "pound", "stone", "ounce"
];

var area = [
  "m2" , "Pm2" , "Tm2" , "Gm2" , "Mm2" , "km2" , "hm2" , "dam2" , "dm2" , "cm2" , "mm2" , "um2" , "nm2" , "pm2" , "acre" , "sq ft" , "sq in" , "sq yd" , "hectare" , "sq mi"
]

var pressure = [
  "pascal" , "bar" , "torr" , "atm"
]

var temperature= [
  "kelvin" , "fahrenheit" , "celsius" , "rankine"
]

var time = [
  "second" , "minute" , "hour" , "milliday" ,"day" , "week" , "fortnight" , "month" , "year" , "decade" , "century" , "shake" , "moment" , "time unit"
]

var volume = [
  "stere" , "m3" , "Pm3" , "Tm3" , "Gm3" , "Mm3" , "km3" , "hm3" , "dam3" , "dm3" , "cm3" , "mm3" , "um3" , "nm3" , "pm3" , "L" , "acre-foot" , "cubic yard" , "cubic foor" ,"MTON" , "imperial barrel" , "imperial gallon" ,  "teaspoon" , "tablespoon" 
]

function opt(name) {
  var removal = document.querySelectorAll('#slct1 option');
  removal.forEach(o => o.remove());
  removal = document.querySelectorAll('#slct2 option');
  removal.forEach(o => o.remove());

  var array = [...lengths] ;

  if( name == "mass") array = [...mass] ;
  if( name == "pressure") array = [...pressure] ;
  if( name == "area") array = [...area] ;
  if( name == "volume") array = [...volume] ;
  if( name == "time") array = [...time] ;
  if( name == "temperature") array = [...temperature] ;

  var x = document.getElementById("slct1");
  var y = document.getElementById("slct2");
  for (var i = 0; i < array.length; i++) {
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    option1.value = array[i];
    option1.text = array[i];
    x.appendChild(option1);
    option2.value = array[i];
    option2.text = array[i];
    y.appendChild(option2);
  }
}



window.onload = function () {

  var name = document.getElementById("select-box1");
  var x = document.getElementById("slct1");
  var y = document.getElementById("slct2");
  if (name.value == "length") {
    for (var i = 0; i < lengths.length; i++) {
      var option1 = document.createElement("option");
      var option2 = document.createElement("option");
      option1.value = lengths[i];
      option1.text = lengths[i];
      x.appendChild(option1);
      option2.value = lengths[i];
      option2.text = lengths[i];
      y.appendChild(option2);
    }
  }

}





