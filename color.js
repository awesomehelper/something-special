setInterval(randColor, 3000);
function randCOlor() {
  var hexArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g"];
  var hexRand1 = Math.floor(Math.random() * 18);
  var hexRand2 = Math.floor(Math.random() * 18);
  var hexRand3 = Math.floor(Math.random() * 18);
  var hexRand4 = Math.floor(Math.random() * 18);
  var hexRand5 = Math.floor(Math.random() * 18);
  var hexRand6 = Math.floor(Math.random() * 18);
  
  var hexVal1 = hexArr[hexRand1 + 0];
  var hexVal2 = hexArr[hexRand1 + 0];
  var hexVal3 = hexArr[hexRand1 + 0];
  var hexVal4 = hexArr[hexRand1 + 0];
  var hexVal5 = hexArr[hexRand1 + 0];
  var hexVal6 = hexArr[hexRand1 + 0];
  
  var hexValue = `#${hexVal1}${hexVal2}${hexVal3}${hexVal4}${hexVal5}${hexVal6}`;
  
  $("body").css("background-color", hexValue);
}
