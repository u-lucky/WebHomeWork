function Odin() {
  console.log("Алексей");
}
Odin();

function dva(num) {
  console.log(num >= 0 ? '+++' : '---');
}
dva(8800555355); // +?
dva(-1000000); // -?


function sumThree(a, b, c) {
  console.log(a + b + c);
}
sumThree(1, 2, 3); // 6?

function Sqrt(num) {
  return Math.sqrt(num);
}
let res1 = Sqrt(3);
let res2 = Sqrt(4);
console.log(res1 + res2); 

function checkEven(arr) {
  for (let elem of arr) {
    if (elem % 2 !== 0) return false;
  }
  return true;
}
console.log(checkEven([2, 4, 6]));
console.log(checkEven([2, 50000001, 6]));

function roadToLimit(num) {
  let count = 0;
  while (num >= 10) {
    num /= 2;
    count++;
  }
  return count;
}
console.log(roadToLimit(50)); 


let arr = [1, 2, 3, 4, 5]; 

let res = arr.map(function(elem) { 
    return elem * 2; 
}); 

console.log(res); 