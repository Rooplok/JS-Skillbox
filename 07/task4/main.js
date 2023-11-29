let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

let button = document.querySelector('.btn');

function createStudentsList(listArr) {
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


button.addEventListener('click', () => createStudentsList(allStudents));