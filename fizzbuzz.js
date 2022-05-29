function fizzbuzz(num) {
  if (typeof num !== "number") {
    return "Lo siento, debe ingresar un numero";
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }

  if (num % 3 === 0) {
    return "fizz";
  }

  if (num % 5 === 0) {
    return "buzz";
  }

  return num;
}

function print(tope) {
  for (let i = 1; i <= tope; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print(100);

module.exports = fizzbuzz;
