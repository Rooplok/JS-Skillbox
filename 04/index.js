//Задача 1
let count = 10;
let n = 100;
let m = 200;
let arr = [];
let rad = Math.abs(n - m);
let min = Math.min(n, m);

for (let i = 0; i < count; i++)
{
    arr.push(Math.round((Math.random() * rad) + min))
}

console.log(rad)
console.log(min)
console.log(arr)
console.log()

//