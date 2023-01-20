console.log(`6.5 Функции высшего порядка`);
/* 6.5 Функции высшего порядка. Задание 3. Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
 */

let number1 = 5,
  number2 = 25;

const sumNumbers = function (firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
};

const resultSum = sumNumbers(number1);

console.log(
  "Первое число = " +
    number1 +
    ". Второе число = " +
    number2 +
    ". Результат функции = " +
    resultSum(number2)
);

/* или  без let resultSum
console.log(
  "Первое число = " +
    number1 +
    ". Второе число = " +
    number2 +
    ". Результат функции = " +
    sumNumbers(number1)(number2)
);


*/
