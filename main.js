// 'use strict';
const getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};
const isNumber = function () {
    return !isNaN(parseFloat()) && isFinite();
};

function game() {
    let randomNumber = getRandomInt(100);
    function gameStart() {
        let number = prompt('Введите число от 1 до 100');
        let realNum = Number(number);
        if (number === null) {
            alert('Игра окончена');
        } else if (realNum > randomNumber) {
            alert('Загаданное число меньше');
            gameStart();
        } else if (realNum < randomNumber) {
            alert('Загаданное число больше');
            gameStart();
        } else if (realNum === randomNumber) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (realNum !== isNumber) {
            alert('Введите число');
            gameStart();
        }
    }
    gameStart();
}
game();
