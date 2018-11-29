var x = [1,2,5,9,10];

console.log(x.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b;
}));

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(studentA, studentB){
  if (studentA.name< studentB.name) {
    return -1;
  }
  if (studentA.name > studentB.name){
    return 1;
  }
  if(studentA.name === studentB.name){
    if(studentA.age > studentB.age){
    return -1;
  }
    if(studentA.age < studentB.age){
    return 1;
  }
}
   return 0;
})


console.log(students);
//function compareTwoStudents(studentA, studentB){




//var studentsSorted = students.sort(compareTwoStudents);

//console.log(studentsSorted);