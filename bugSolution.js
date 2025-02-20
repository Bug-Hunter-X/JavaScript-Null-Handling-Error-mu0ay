function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

function bar(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      sum += arr[i]; // Only add if not null
    }
  }
  return sum;
}

console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3

const myArray = [1, 2, null, 4, 5];
console.log(bar(myArray)); // Output: 12