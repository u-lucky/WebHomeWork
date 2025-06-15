let arr = [3, 1, 2, 5, 4]; 

let res = arr.map(function(elem) { 
    return elem * 2; 
}); 

console.log(res); 

console.log("------------------");
let sum = 0;
arr.forEach(num => sum += num ** 2);

console.log(sum);

console.log("------------------");
let mix = [-1, 2, -3, 4]
const posit = mix.filter(num => num > 0);
console.log(posit);

console.log("------------------");
const positive = [7, 12, 1, 8];
const antipositive = [7, -1, 0, 8];

console.log(positive.every(num => num > 0));
console.log(antipositive.every(num => num > 0));
console.log("------------------");

let nopositive = [-1, -2, -3];

console.log(nopositive.some(num => num > 0)); 
console.log(mix.some(num => num > 0)); 