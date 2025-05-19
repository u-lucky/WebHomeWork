let timerId1;
document.getElementById('startBtn1').addEventListener('click', () => {
    if (timerId1) return;
    const counter = document.getElementById('counter1');
    timerId1 = setInterval(() => counter.textContent = +counter.textContent + 1, 1000);
});

// 2. Уменьшение
let timerId2;
document.getElementById('startBtn2').addEventListener('click', () => {
    if (timerId2) return;
    const counter = document.getElementById('counter2');
    timerId2 = setInterval(() => {
        const value = +counter.textContent - 1;
        counter.textContent = value;
        if (value <= 0) clearInterval(timerId2);
    }, 1000);
});

// 3. Отсчет по blur
let timerId3;
document.getElementById('input3').addEventListener('blur', function() {
    const value = +this.value;
    if (isNaN(value)) return;
    const counter = document.getElementById('counter3');
    if (timerId3) clearInterval(timerId3);
    counter.textContent = value;
    timerId3 = setInterval(() => {
        counter.textContent = +counter.textContent - 1;
        if (counter.textContent <= 0) clearInterval(timerId3);
    }, 1000);
});

// 4. Отсчет по кнопке
let timerId4;
document.getElementById('startBtn4').addEventListener('click', () => {
    const value = +document.getElementById('input4').value;
    if (isNaN(value)) return;
    const counter = document.getElementById('counter4');
    counter.textContent = value;
    if (timerId4) clearInterval(timerId4);
    timerId4 = setInterval(() => {
        counter.textContent = +counter.textContent - 1;
        if (counter.textContent <= 0) clearInterval(timerId4);
    }, 1000);
});

// 5. Сообщение через 10 сек
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('message').textContent = 'Сообщение через 10 секунд';
    }, 10000);
});

// Алгоритмы сортировки
const sortingAlgorithms = {
    quickSort: arr => {
        if (arr.length <= 1) return arr;
        const pivot = arr[Math.floor(arr.length / 2)];
        const [left, right, equal] = [[], [], []];
        arr.forEach(num => num < pivot ? left.push(num) : num > pivot ? right.push(num) : equal.push(num));
        return [...sortingAlgorithms.quickSort(left), ...equal, ...sortingAlgorithms.quickSort(right)];
    },

    heapSort: arr => {
        function heapify(arr, n, i) {
            let largest = i;
            const left = 2 * i + 1, right = 2 * i + 2;
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
    },

    mergeSort: arr => {
        const merge = (left, right) => {
            const result = [];
            while (left.length && right.length) {
                result.push(left[0] <= right[0] ? left.shift() : right.shift());
            }
            return [...result, ...left, ...right];
        };
        return arr.length <= 1 ? arr : merge(
            sortingAlgorithms.mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
            sortingAlgorithms.mergeSort(arr.slice(Math.floor(arr.length / 2)))
        );
    }
};

function runAllSorts() {
    const input = document.getElementById('arrayInput').value.split(',').map(Number);
    const results = document.getElementById('sortResults');
    results.innerHTML = `
        QuickSort: ${sortingAlgorithms.quickSort([...input])}<br>
        HeapSort: ${sortingAlgorithms.heapSort([...input])}<br>
        MergeSort: ${sortingAlgorithms.mergeSort([...input])}
    `;
}