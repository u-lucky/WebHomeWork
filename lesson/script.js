// Найти строки по шаблону: буква 'a', любой символ, буква 'b'
let str1 = 'ahb acb aeb aeeb adcb axeb';
let regex1 = /a.b/g;
console.log('1:', str1.match(regex1));

// Найти строки по шаблону: строка 'ab' повторяется 1 или более раз
let str2 = 'ab abab abab ababab abba';
let regex2 = /(ab)+/g;
console.log('2:', str2.match(regex2)); 

// Найти строки, в которых по краям стоят буквы 'a', а между ними одна цифра
let str3 = 'a aa aaa aaa aaa aaa';
let regex3 = /a\d{1}a/g;
console.log('3:', str3.match(regex3)); 

// Найти строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'
let regex4 = /1[^ex]2/g;
// Пример использования:
let testStr4 = '1a2 1e2 1x2 1 2 1b2';
console.log('4:', testStr4.match(regex4)); // ["1a2", "1b2"]

// Определить, начинается ли строка с 'http://'
function startsWithHttp(url) {
    return /^http:\/\//.test(url);
}
console.log('5:', startsWithHttp('http://example.com')); // true
console.log('5:', startsWithHttp('https://example.com')); // false

// Определить, заканчивается ли строка расширением 'txt', 'html' или 'php'
function endsWithValidExtension(filename) {
    return /\.(txt|html|php)$/.test(filename);
}
console.log('6:', endsWithValidExtension('file.txt')); // true
console.log('6:', endsWithValidExtension('index.html')); // true
console.log('6:', endsWithValidExtension('script.php')); // true
console.log('6:', endsWithValidExtension('image.jpg')); // false

// Найти подстроку, содержащую цифры
let str7 = 'aa123 bbb';
let regex7 = /\d+/g;
console.log('7:', str7.match(regex7)); // ["123"]

// Найти по шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти
let str8 = 'a aaa aaa aaa';
let regex8 = /a\d{3,6}a/g;
console.log('8:', str8.match(regex8)); // null (в строке нет цифр)