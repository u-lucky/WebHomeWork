console.log("One");
let obj = {
  a: 1,
  b: {c: 2, d: 3, e: 4},
  f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};

function print(obj) {
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      print(value); // Рекурсия для вложенных объектов
    } else {
      console.log(value); // Вывод примитива
    }
  }
}
print(obj);

console.log("\n");
console.log("Two");

function sump(obj) {
  let sum = 0;
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      sum += sump(value); // Рекурсия для вложенных объектов
    } else {
      sum += value; // Суммируем примитив
    }
  }
  return sum;
}

console.log(sump(obj)); // 45