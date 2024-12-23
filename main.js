"use strict";

function arithmeticAverage(arr) {
  const numbers = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b, 0);

  return sum / numbers.length;
}

const array = [1, NaN, 12, "123", 2, null, { a: 10 }];
console.log(arithmeticAverage(array));
