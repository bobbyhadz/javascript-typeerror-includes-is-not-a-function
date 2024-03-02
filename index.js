// TypeError: includes is not a function in JavaScript

// EXAMPLE 1 - Convert the value to a String or Array before using `includes()`

// ✅ Convert to a String before using includes()
const num = 1234;
const result1 = String(num).includes('3');
console.log(result1); // 👉️ true

if (result1) {
  console.log('is contained');
} else {
  console.log('is NOT contained');
}

// // ----------------------------------------------------

// // ✅ Convert to an Array before using includes()
// const set = new Set(['a', 'b', 'c']);
// const result2 = Array.from(set).includes('b');
// console.log(result2); // 👉️ true

// if (result2) {
//   console.log('is contained');
// } else {
//   console.log('is not contained');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Conditionally check if the value is an array before using `includes()`

// // ✅ check if the value is a String before using includes()
// const num = 1234;
// const result1 =
//   typeof num === 'string' ? num.includes('3') : false;
// console.log(result1); // 👉️ false

// // --------------------------------------------

// // ✅ check if the value is an Array before using includes()
// const set = new Set(['a', 'b', 'c']);
// const result2 = Array.isArray(set) ? set.includes('b') : false;
// console.log(result2); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement to check if array or string

// // ✅ check if the value is a String before using includes()
// const num = 1234;

// let result1 = false;

// if (typeof num === 'string') {
//   result1 = num.includes('3');
//   console.log(result1);
// }

// console.log(result1); // 👉️ false

// // --------------------------------------------

// // ✅ check if the value is an Array before using includes()
// const set = new Set(['a', 'b', 'c']);

// let result2 = false;

// if (Array.isArray(set)) {
//   result2 = set.includes('b');
// }

// console.log(result2); // 👉️ false
