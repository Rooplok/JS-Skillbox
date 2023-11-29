function createStudentCard(name, age) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    document.body.append(div);
    div.append(h2);
    div.append(span);

    h2.textContent = name;
    span.textContent = `Возраст: ${age} лет`;
}

createStudentCard('Игорь', 17);
createStudentCard('Илья', 23);
createStudentCard('Сергей', 56);