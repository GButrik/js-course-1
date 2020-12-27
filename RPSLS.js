//1 — Камень
//2 — Ножницы
//3 — Бумага
//4 — Ящерица
//5 — Спок

let PC = Math.round(Math.random() * 5);
let you = + prompt (' 1: Камень \n 2: Ножницы \n 3: Бумага \n 4: Ящерица \n 5: Спок');

if ((you === 1 && PC === 2) || (you === 2 && PC === 3) || (you === 3 && PC === 1) || (you === 1 && PC === 4) || (you === 4 && PC === 5) || (you === 5 && PC === 2) || (you === 2 && PC === 4) || (you === 4 && PC === 3) || (you === 3 && PC === 5) || (you === 5 && PC === 1)) {
    alert('Вы победили');
} else if (you === PC) {
    alert('Ничья');
    window.location.reload();
} else {
    alert('Вы проиграли');
}
document.getElementById('result').innerText = 'Вы выбрали ' + you + ', а Компьютер выбрал ' + PC + '.';