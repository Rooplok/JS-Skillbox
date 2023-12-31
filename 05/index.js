//Задача 1
function getAge(year){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - year;
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));
console.log();

//Задача 2
// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
// Вызов созданной функции:
let result = whiteList.filter(item => !blackList.includes(item));

console.log(result)
console.log()

//Задача 3
function arrSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(arrSort([2,5,1,3,4]));
console.log(arrSort([12,33,3,44,100]));
console.log(arrSort([0,1]));