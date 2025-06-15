// Быстрая сортировка (Quick Sort)
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const [left, right, equal] = [[], [], []];
    for (const num of arr) {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else equal.push(num);
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Пирамидальная сортировка (Heap Sort)
function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

// Карманная сортировка (Bucket Sort)
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;
    const [max, min] = [Math.max(...arr), Math.min(...arr)];
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);
    for (const num of arr) buckets[Math.floor((num - min) / bucketSize)].push(num);
    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b));
}

// Поразрядная сортировка (Radix Sort)
function radixSort(arr) {
    const maxDigits = Math.max(...arr).toString().length;
    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (const num of arr) {
            const digit = Math.floor(num / 10 ** i) % 10;
            buckets[digit].push(num);
        }
        arr = buckets.flat();
    }
    return arr;
}

// Сортировка подсчетом (Counting Sort)
function countingSort(arr) {
    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);
    for (const num of arr) count[num]++;
    const sorted = [];
    for (let i = 0; i <= max; i++) while (count[i]--) sorted.push(i);
    return sorted;
}

// Сортировка слиянием (Merge Sort)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
}

const data = [34, 7, 23, 32, 5, 62];
console.log("Merge Sort:", mergeSort([...data]));
console.log("Quick Sort:", quickSort([...data]));
console.log("Radix Sort:", radixSort([...data]));