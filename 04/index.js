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

//Задача 2
let count2 = 10;
let arr2 = [];
let temp = 0;

for (let i = 0; i < count2; i++)
{
    arr2.push(i + 1)
}

for (let i = 0; i < count2; i++)
{
    let j = Math.floor(Math.random() * count2);
    temp = arr2[j];
    arr2[j] = arr2[i];
    arr2[i] = temp;
}

console.log(arr2)
console.log()

//Задача 3
let n3 = 5;


if (arr2.indexOf(n3) >= 0){
    console.log(arr2.indexOf(n3))
}
else{
    console.log('Элемент не найден')
}

console.log()

//Задача 4
arr3 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
arr4 = [...arr3, 12, 44, 23, 5]

console.log(arr4)