// Andrew Ribicki
// CMP237 Array.js

load('myarray.js'); 
var myarray = JSON.parse(myarray_File);

function filter(array, test) {
  var passed = []
  for (var i = 0; i < array.length; i++) {           
    if (test(array[i])) {                           
     passed.push(array[i]);
     }
     }
     }
     return passed;
     }
     
      print(JSON.stringify(filter(myarray, function(number) {
       return number.randomnumber < 50;                             
     })));
