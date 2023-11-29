function Student(name, age){
    this.name = name;
    this.age = age;
}


function createStudentCard(student) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    document.body.append(div);
    div.append(h2);
    div.append(span);

    h2.textContent = student.name;
    span.textContent = `Возраст: ${student.age} лет`;
}

createStudentCard(new Student('Игорь', 17));
createStudentCard(new Student('Илья', 23));
createStudentCard(new Student('Сергей', 56));

// Как лучше создавать кучу объектов? Вот так через функцию? Или через список как то?
// Как лучше создавать кучу объектов? Вот так через функцию? Или через список как то?
// Как лучше создавать кучу объектов? Вот так через функцию? Или через список как то?
// Как лучше создавать кучу объектов? Вот так через функцию? Или через список как то?
// Как лучше создавать кучу объектов? Вот так через функцию? Или через список как то?
// ;)