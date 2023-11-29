let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

function createStudentList(listArr) {
    let ul = document.createElement('ul');
    document.body.append(ul);
    listArr.forEach(student => {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        let span = document.createElement('span');

        ul.append(li);
        li.appendChild(h2);
        li.appendChild(span);

        h2.textContent = student.name;
        span.textContent = `Возраст: ${student.age} лет`;
    })
}

createStudentList(allStudents);

//P.S. Про создание списка объектов я имел ввиду, как тут в allStudents
//P.S. Про создание списка объектов я имел ввиду, как тут в allStudents
//P.S. Про создание списка объектов я имел ввиду, как тут в allStudents
//P.S. Про создание списка объектов я имел ввиду, как тут в allStudents
//P.S. Про создание списка объектов я имел ввиду, как тут в allStudents
// ;)