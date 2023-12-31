const form = document.getElementById('myForm');
const table = document.getElementById('table');

form.addEventListener('submit', function(event) {
    //if (inputStudentName !== '' &&
    //    inputStudentSName !== '' &&
    //    inputStudentLName !== '' &&
    //    new Date(inputStudentBDate) >= new Date('1900-01-01') &&
    //    new Date(inputStudentBDate) <= new Date() &&
    //   parseInt(inputStudentStLearn) &&
    //    parseInt(inputStudentStLearn) >= 2000 &&
    //    parseInt(inputStudentStLearn) <= new Date().getFullYear() &&
    //    inputStudentFac !== ''
    //) 
    {
        event.preventDefault(); // Отменяем отправку формы

        const name = form.elements.name.value;
        const surname = form.elements.surname.value;
        const middleName = form.elements.middleName.value;
        const date = form.elements.date.value;
        const startYear = form.elements.startYear.value;
        const faculty = form.elements.faculty.value;

        const student = {
        name: name,
        surname: surname,
        middleName: middleName,
        date: date,
        startYear: startYear,
        faculty: faculty
        };

        displayStudent(student); // Отображаем студента в таблице

        // Сохраняем данные в localStorage
        localStorage.setItem(`${name}${surname}`, JSON.stringify(student));

        form.reset(); // Очищаем форму
    }
});

function displayStudent(student) {
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    const fio = `${student.surname} ${student.name} ${student.middleName}`
    cell1.textContent = fio;
    row.appendChild(cell1);

    const cell2 = document.createElement('td');
    const fuc = `${student.faculty}`
    cell2.textContent = fuc;
    row.appendChild(cell2);

    const cell3 = document.createElement('td');
    const dateArr = student.date.split('-');
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDate = now.getDate();
    const year = nowYear - parseInt(dateArr[0]) - (0 > (nowMonth - parseInt(dateArr[1]) || nowDate - parseInt(dateArr[2])));
    const dateB = `${dateArr[2]}.${dateArr[1]}.${dateArr[0]} (${year})`
    cell3.textContent = dateB;
    row.appendChild(cell3);

    const cell4 = document.createElement('td');
    if (parseInt(student.startYear) + 4 - new Date().getFullYear() > 0) {
        course = `${parseInt(new Date().getFullYear()) - parseInt(student.startYear) + 1} курс`;
    }
    course = parseInt(new Date().getFullYear() + 1) - parseInt(student.startYear);
    if (course > 4) {
        course = 'Закончил';
    }
    const yearsS = `${student.startYear}-${parseInt(student.startYear) + 4} (${course} курс)`
    cell4.textContent = yearsS;
    row.appendChild(cell4);

    table.appendChild(row);
}

// Проверяем, есть ли сохраненные данные в localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    displayStudent(value); // Отображаем сохраненного студента в таблице
}