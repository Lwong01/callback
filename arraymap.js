var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj =>{
   var rObj = [];
   rObj = Math.pow(2, obj.x) + Math.pow(2, obj.y);
   rObj = Math.sqrt(rObj);
   rObj = Math.ceil(rObj);
   return rObj;
} );


console.log(result);
//console.log(result[0] === 5);
//console.log(result[1] === 13);
//console.log(result[2] === 17);