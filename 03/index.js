//Задача 1
let password = 'wpsd_sddf'
if ((password.includes('_') || password.includes('-')) && password.length >= 4)
{
    console.log('Пароль надежный')
}
else
{
    console.log('Пароль недостаточно надежный')
}
console.log()

//Задача 2
let userName = 'NikIta'
let userSurname = 'kaCurin'

function isWordCorrect(word)
{
    let first = word.substring(0, 1)
    let other = word.substring(1)

    if (first == first.toUpperCase() && other == other.toLowerCase())
    {
        return true
    }
    else
    {
        return false
    }
}

function createCorrectWord(word)
{
    let first = word.substring(0, 1)
    let other = word.substring(1)

    return first.toUpperCase() + other.toLowerCase()
}

let answer1 = isWordCorrect(userName) ? 'Имя осталось без изменений' : 'Имя было преобразовано';
let answer2 = isWordCorrect(userSurname) ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована';

let correctUserName = createCorrectWord(userName)
let correctUserSurname = createCorrectWord(userSurname)

console.log(correctUserName)
console.log(correctUserSurname)
console.log(answer1)
console.log(answer2)
console.log()

//Задача 3
let number = 5

number % 2 == 0 ? console.log('Число чётное') : console.log('Число нечётное');