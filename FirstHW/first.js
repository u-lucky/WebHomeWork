console.log("One");
let arr = [1, 2, 3, 4, 5];

function printArray(arr, index = 0) {
  if (index >= arr.length) return;
  console.log(arr[index]);
  printArray(arr, index + 1);
}

printArray(arr);

console.log("\n");
console.log("Two");

function sumOfSquares(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] ** 2 + sumOfSquares(arr, index + 1);
}

console.log(sumOfSquares(arr)); 