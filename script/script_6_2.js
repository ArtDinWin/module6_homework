console.log(`6.4 Параметры и возвращаемое значение`);
/* 6.4 Параметры и возвращаемое значение. Задание 2. Написать функцию, которая принимает на входе любое число 
(но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы..
 */
// let number = getNumber();

function getNumber() {
  let number = prompt("Введите число X целое от 0 до 1000:");
  while (!number || +number > 1000 || +number < 0 || isNaN(+number)) {
    number = prompt(
      "Кажется, вы ошиблись! Число должно быть целое от 0 до 1000. Введите заново:"
    );
  }
  return +number;
}

function isPrimeNumber(number) {
  if (number === 0 || number === 1) {
    return console.log(`Число ${number} - ни простое, ни составное `);
  } else {
    const limit = Math.sqrt(number);
    let i = 2;
    while (i <= limit) {
      if (number % i === 0) {
        return console.log(`Число ${number} - составное.`);
      }
      i += 1;
    }
    return console.log(`Число ${number} - простое.`);
  }
}

isPrimeNumber(getNumber());
