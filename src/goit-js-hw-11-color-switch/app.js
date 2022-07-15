
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// 1. получить ссылки на кнопки
// 2. функция смены цвета
// 3. повесить эвентлисенер
// 4. повесить setInterval()  1 секунда который запускает функцию смены цвета, кнопка старт становится не активной
// 5. кнопка стоп которая очищает таймер и возвращает активность кнопке старт

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let timerId = null;

const randomColor = function () {
    return colors[randomIntegerFromInterval(0, 5)];
};


startButton.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log('setInterval');
        body.style.backgroundColor = randomColor();
        startButton.setAttribute("disabled", "true");
    }, 1000);
  });

stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    startButton.removeAttribute("disabled");
});