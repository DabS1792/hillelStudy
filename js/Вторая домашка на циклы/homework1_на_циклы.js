// Задание 1

let x = +prompt('Введите число');
if (x < 0) {
  alert('Число отрицательное');
} else if (x > 0) {
  alert('Число положительное');
} else if (x === 0) {
  alert('Число 0');
}

// Задание 2

let myMoney = +prompt('Сколько у меня денюжек');
let myFriendMoney = +prompt('Сколько у моего друга денюжек');
if (myMoney + myFriendMoney > 100) {
  alert('Ура, мы богаты, сегодня летим на Майорку')
} else {
  alert('А может по пиву лучше?')
}

// Задание 3

let age = +prompt('Сколько вам лет?');
if ((age >= 20) && (age < 27)) {
  alert('Выслать повестку');
} else {
  alert('Всё отлично');
}

// Задание 4

let busNumber = +prompt('Номер автобуса?');
if (busNumber == 7) {
  alert('Отправляемся домой');
} else if (busNumber == 225) {
  alert('Отправляемся домой');
} else if (busNumber == 255) {
  alert('Отправляемся домой');
} else {
  alert('Придётся подождать не много');
}

// Задание 5

let currentWeekDay = prompt('Какой сегодня день?');
if ((currentWeekDay.toLowerCase() === 'суббота') || (currentWeekDay.toLowerCase() === 'воскресенье')) {
  alert('Можно отдохнуть:)');
} else {
  alert('Пора на работку');
}

// Задание 6

let x = +prompt('Введите значения от -20 до 20');
let y = +prompt('Введите значения от -20 до 20');
if ((x <= 1) || (y >= 3) || (y < 0)) {
  alert(x + y);
} else {
  alert('Неверно');
}

// Задание 7

let x = +prompt('Введите значения');
let y = +prompt('Введите значения');
if (((x > 2) && (x < 11)) || ((y >= 6) && (y < 14))) {
  alert(x + 2);
} else {
  alert(x + 5);
}

// Задание 8

let userName = prompt('Ваше имя');
if ((userName == String(userName)) && (userName != "")) {
  alert(`Привет, ${userName}!`);
}

// Задание 9

let greeting = ('');
let lang = prompt('Укажите язык - ru, en, de');
if (lang.toLowerCase() === 'ru') {
  alert(greeting = 'Привет!');
} else if (lang.toLowerCase() === 'en') {
  alert(greeting = 'Hello!');
} else if (lang.toLowerCase() === 'de') {
  alert(greeting = 'Hallo!');
}


let greeting = ('');
let lang = prompt('Укажите язык - ru, en, de');

switch (lang.toLowerCase()) {
  case "ru":
    alert('Привет!');
    break;
  case "en":
    alert('Hello!');
    break;
  case "de":
    alert('Hallo!');
    break;
}

// Задание 10

let month = new Date();
if ((month.getMonth() === 11) || (month.getMonth() === 0) || (month.getMonth() === 1)) {
  alert('Сейчас Зима');
} else if ((month.getMonth() === 2) || (month.getMonth() === 3) || (month.getMonth() === 4)) {
  alert('Сейчас Весна');
} else if ((month.getMonth() === 5) || (month.getMonth() === 6) || (month.getMonth() === 7)) {
  alert('Сейчас Лето');
} else if ((month.getMonth() === 8) || (month.getMonth() === 9) || (month.getMonth() === 10)) {
  alert('Сейчас Осень');
}

// Задание 11

let lang;
let date = new Date();
let day = date.getDay();
let result;

function getWeekDay(date) {
  if (document.documentElement.lang === "en") {
    switch (day) {
      case 0: return 'Sun'
        break
      case 1: return 'Mon'
        break
      case 2: return 'Tue'
        break
      case 3: return 'Wed'
        break
      case 4: return 'Thu'
        break
      case 5: return 'Fri'
        break
      case 6: return 'Sat'
        break
    }
  } if (document.documentElement.lang === "ru") {
    switch (day) {
      case 0: return 'Воскресенье'
        break
      case 1: return 'Понедельник'
        break
      case 2: return 'Вторник'
        break
      case 3: return 'Среда'
        break
      case 4: return 'Четверг'
        break
      case 5: return 'Пятница'
        break
      case 6: return 'Суббота'
        break
    }
  }
}
alert(result = getWeekDay(date));

// Задание 12

let userName = prompt('Ваше Имя?');
let userAge = +prompt('Ваш возраст?');

switch (userName) {
  case 'John':
    console.log(`Привет ${userName} ${userAge}`);
    break;
  case 'Kate':
    console.log(`Привет ${userName} ${userAge}`);
    break;
  default:
    console.log('Пока');
}

(userName === 'John' || userName === 'Kate') ? console.log(`Привет ${userName} ${userAge}`) : console.log('Пока');

// Задание 13

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log('#')

  } else {
    console.log('.')
  }
}

// Задание 14

for (i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(Math.pow(i, 2));
  }
}

// Задание 15

let userName = prompt('Введите ваш Имя');
for (i = 0; i < 10; i++) {
  console.log(i = 'Happy Birthday to you');
  console.log(i = 'Happy Birthday to you');
  console.log(i = (`Happy Birthday dear ${userName}`));
  console.log(i = 'Happy Birthday to you');
}

// Задание 16

let x = confirm('Ок или отмена?');
if (x == true) {
  console.log('Мы закончили цикл');
} else if (x == false) {
  confirm('Вам есть 18 лет?');
}

// Задание 17

let x = +prompt('Введите максимальное число');
let sum = 0;
for (i = 1; i < x; i += 2) {
  sum += i;
}
console.log(sum);


// Задание 18

let i = 0;
while (Math.random() < 0.9) {
  if (Math.random() > 0.9) {
    alert(Math.random());
    break;
  }
  i = i + 1;
}
alert(i);

// Задание 19

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`)
  }
}

// Задание 20

let string_fibo = '';
const finale = 20;
for (let i = 0, j = 1; i <= finale;) {
  string_fibo = string_fibo + i + ' ', [i, j] = [j, i + j];
}
console.log(string_fibo);

// Задание 21

let i = 0;
let s = 0;
let x = +prompt("Введите число");

while (x != null) {
  i = i + 1;
  s = s + +x;
  x = prompt("Введите ещё число");
}

alert("Чисел введено: " + i);
alert("Сумма чисел: " + s);
alert("Среднее арифметическое: " + (s / i));

// Задание 22

let userPassword;
let userCorrectPass = 12345;

while ((userPassword !== userCorrectPass) || (userPassword != false)) {
  userPassword = +prompt('Введите пароль');
  if (userPassword === userCorrectPass) {
    alert('Вы успешно авторизованы');
    break;
  } else if (userPassword == false) {
    x = confirm('Вы уверены, что хотите отменить авторизацию?');
    if (x == true) {
      alert('Вы отменили авторизацию');
      break;
    }
  }
}

// Задание 23

for (i = 1; i <= 50; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('FizzBuzz');
    continue
  } else if (i % 3 == 0) {
    console.log('Fizz');
    continue
  } else if (i % 5 == 0) {
    console.log('Buzz');
    continue
  }
  console.log(i);
}

//  конец