//Задача 1
let user1 = {
    name: 'Игорь',
    age: 17
}
let user2 = {
    name: 'Оля',
    age: 21
}

function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1.name;
    }
    return user2.name;
}

console.log(getOlderUser(user1, user2));
console.log();

//Задача 2
let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

let result = allUsers.sort((a, b) => b.age - a.age)

console.log(result[0].name);
console.log();

//Задача 3
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function filter(array, key, value) {
    return array.filter(e => e[key] == value);
}

console.log(filter(objects, 'name', 'Иван'));