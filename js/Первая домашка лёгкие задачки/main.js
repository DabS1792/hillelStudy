Первая задачка

let first = 17;
let second = first * 3;
let third = first + second;
alert(first);
alert(second);
alert(third);

------------------------------------------------

  Вторая задачка

let firstName = prompt('Your name');
let lastName = prompt('Your lastName');
alert(`What’s up ${firstName} ${lastName}`);

------------------------------------------------

  Третья задачка

let x = +prompt('Укажите первое число');
let y = +prompt('Укажите второе число');
let multiplication = x * y;
alert(multiplication);
let divide = x / y;
alert(divide);
let subtraction = x - y;
alert(subtraction);
let sum = x + y;
alert(sum);

------------------------------------------------

  Четвёртая задачка

let countWorkHours = +prompt('Укажите количество рабочих часов');
let countWorkDays = +prompt('Укажите количество рабочих дней');
let countWorkHourPrice = +prompt('Укажите рейт за час');
let salary = (countWorkHours * countWorkHourPrice);
alert(`Ваша зарплата: ${salary}`);

------------------------------------------------

  Пятая задачка

let userNumber = +prompt("Введите Число");
if (userNumber % 2 != 0) {
  alert("Число нечетное");
}
if (userNumber % 2 == 0) {
  alert("Число четное");
}

------------------------------------------------

  Шестая задачка

let userNumber = +prompt("Введите Число");
alert(!Number.isNaN(userNumber));

------------------------------------------------

  Седьмая задачка

let randomNumber = (Math.round(Math.random() * 100));
alert(randomNumber);

------------------------------------------------

  Восьмая задачка

let str = prompt('Ваш текст');
let strTwo = prompt('Что вам нравится изучать?');
console.log(str.includes(strTwo));
let strAnother = str.substring(0, 21);
let result = `${strAnother} ${strTwo}`;
alert(result);

------------------------------------------------