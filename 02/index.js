//Задача 1
//координаты первой точки
let x1 = 2;
let y1 = 3;

//координаты второй точки
let x2 = 10;
let y2 = 5;

//Вычисление площади
let length = Math.abs(x1 - x2);
let width = Math.abs(y1 - y2);
let square = length * width;
console.log('Площадь равна: ' + square)
console.log();

//Задача 2
let a = 13.123456789;
let b = 2.123;
let n = 5;

a = Math.floor((a - Math.floor(a)) * Math.pow(10, n))
b = Math.floor((b - Math.floor(b)) * Math.pow(10, n))

console.log('a = ' + a)
console.log('b = ' + b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a === b)
console.log(a !== b)
console.log();

//Задача 3
function f_random(n, m)
{
    let range = Math.abs(n - m);
    let min = Math.min(n, m);
    let ranNum = Math.round(Math.random() * range) + min;
    return ranNum;
}

let ar = f_random(0, 100);
let br = f_random(100, -5);

console.log('ar = ' + ar)
console.log('br = ' + br)

console.log(ar > br)
console.log(ar < br)
console.log(ar >= br)
console.log(ar <= br)
console.log(ar === br);
console.log(ar !== br);