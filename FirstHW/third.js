let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function squareElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      squareElements(arr[i]); 
    } else {
      arr[i] = arr[i] ** 2; 
    }
  }
  return arr;
}

console.log(squareElements(arr));