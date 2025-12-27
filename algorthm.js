function sum(a, b) {
  console.log(a + b);
}

sum(12, 12);

function measure(a, b, c) {
  if (a > b && b > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

measure(12, 10, 23);

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

let x = factorial(5);
console.log(x);
