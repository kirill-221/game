// 'use strict';
const isNumber = function () {
    return !isNaN(parseFloat()) && isFinite();
};

function game() {
    let x = 5;
    function gameStart() {
        let number = prompt('Введите число от 1 до 100');
        let realNum = Number(number);
        if (number === null) {
            alert('Игра окончена');
        } else if (realNum > x) {
            alert('Загаданное число меньше');
            gameStart();
        } else if (realNum < x) {
            alert('Загаданное число больше');
            gameStart();
        } else if (realNum === x) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (realNum !== isNumber) {
            alert('Введите число');
            gameStart();
        }
    }
    gameStart();
}
game();
