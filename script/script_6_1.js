console.log(`6.2 Функции без параметров.`);
/* 6.2 Функции без параметров. Задание 1. Дан массив. Нужно вывести в консоль количество чётных и
      нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он
      учитывается и выводится отдельно. 
      При выполнении задания необходимо учесть, что массив может содержать не
      только числа, но и, например, знаки, null и так далее.
      ИСПОЛЬЗОВАТЬ функцию */
const array = ["1", 2, "три", 4, null, 8, "+", 1];

function countEvenOdd(array) {
  let even = 0,
    odd = 0,
    notNumbers = 0,
    emptyItems = 0;

  array.forEach((item) => {
    if (item === null) {
      emptyItems++;
      notNumbers++;
    } else if (typeof item === "number") {
      if (isNaN(item)) {
        notNumbers++;
      } else {
        if (item % 2 == 0) {
          even++;
        } else {
          odd++;
        }
      }
    } else {
      notNumbers++;
    }
  });
  console.log(`Четных элементов в массиве = ${even}`);
  console.log(`Нечетных элементов в массиве = ${odd}`);
  console.log(
    `Остальных элементов в массиве = ${notNumbers}` +
      `${emptyItems ? ` из которых нулевых элементов = ${emptyItems}` : ``}`
  );
}

countEvenOdd(array);
