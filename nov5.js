// const n = 5;

// let result = "";

// result = result + "*";

// result = result + "*";

// result = result + "*";

// console.log(result);

// for (let k = 0; k < n; k++) {
//   let i = 0;
//   while (i < n) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// for (let k = 0; k < n; k++) {
//   let i = 0;
//   while (i < k + 1) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }
//   while (i < k + 1) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// let n = 5;
// let result = "";

// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }
//   while (i < k + 1) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }
//   while (i < k + 1) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) {
//       str += "*";
//     } else str += " ";
//   }

//   console.log(str);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= 2 * n; ++j) {
//     if (i + j == n + 1 || i == j - n + 1) str += "*";
//     else str += " ";
//   }

//   console.log(str);
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";

  for (let j = 1; j <= 2 * n; ++j) {
    if (i + j == n + 1 || i == j - n + 1) {
      str += "*";
    } else str += " ";
  }

  console.log(str);
}
