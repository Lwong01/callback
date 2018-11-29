var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callbackFunc) {
 var arrMod = [];
 arr.forEach(function(word){
  arrMod.push(callbackFunc(word));
 })
 console.log(arrMod);
  }

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


