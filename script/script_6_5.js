console.log(`6.8 Функции в ES6.`);
/* 
6.8 Функции в ES6
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

let x = getNumber("x");
let n = getNumber("n");

function getNumber(nameNumber) {
  let number = 1;

  if (nameNumber === "x") {
    number = prompt("Введите число X от 1 и больше");
    while (!number || +number < 1 || isNaN(+number)) {
      number = prompt(
        "Кажется, вы ошиблись! Введите число (от 1 и больше) заново:"
      );
    }
  } else if (nameNumber === "n") {
    number = prompt("Введите n число возведения в степень");
    while (!number || +number < 0 || isNaN(+number)) {
      number = prompt(
        "Кажется, вы ошиблись! Введите n число возведения в степень заново:"
      );
    }
  }
  return number;
}

// встроенными средствами
const exp1 = (x, n) => {
  let result = Math.pow(x, n);
  return result;
};

// встроенными средствами
const exp2 = (x, n) => {
  let result = x ** n;
  return result;
};

/* рекурсия */
const exp3 = (x, n) => {
  if (n > 0) {
    return x * exp3(x, n - 1);
  }
  return 1;
};

console.log("Math.pow: " + x + " в степени " + n + " = " + exp1(x, n));
console.log(x + " ** " + n + " = " + exp2(x, n));
console.log("Рекурсия: " + x + " в степени " + n + " = " + exp3(x, n));
