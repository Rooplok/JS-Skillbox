const game = document.getElementById('game');

let cardsCount = 8


let mas = [];
let firstCard = null;
let secondCard = null;

function generateMas(mas) {
    for (let i = 1; i <= cardsCount; i++) {
        mas.push(i, i)
    }
    return mas;
}

function mixing(mas) {
    mas.sort(() => Math.random() - 0.5);
    return mas;
}

mas = mixing(generateMas(mas));

for (const cardNumber of mas) {
    let card = document.createElement('div');
    card.textContent = cardNumber;
    card.classList.add('card');

    card.addEventListener('click', function () {

        if (card.classList.contains('open') || card.classList.contains('success')) {
            return;
        }

        if (firstCard !== null && secondCard !== null) {
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard = null;
            secondCard = null;
        }

        card.classList.add('open');

        if (firstCard === null) {
            firstCard = card;
        } else {
            secondCard = card;
        }

        if (firstCard !== null && secondCard !== null) {
            let firstCardNumber = firstCard.textContent;
            let secondCardNumber = secondCard.textContent;

            if (firstCardNumber === secondCardNumber) {
                firstCard.classList.add('success');
                secondCard.classList.add('success');
            }
        }

    });

    game.append(card)
}