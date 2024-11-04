// let age1 = 20;
// let age2 = 35;
// let age3 = 40;
// let age4 = 21;
// let age5 = 64;

// let totalAge = age1 + age2 + age3 + age4 + age5;
// let total = 5;

// let avgAge = totalAge / total;

// console.log(avgAge);

// for (let i = 0; i < 10; i++) {
//   console.log("Hello", i);
// }

// const ages = [20, 32, 45, 64];

// console.log(ages);

// const age32 = [40];

// let favoriteColors = ["blue", "white", "black", "darknavy", "pink"];

// favoriteColors.push("darkgreen");
// favoriteColors[2] = "grey";

// console.log(favoriteColors);

// let levelsCompleted = [true, false];

// levelsCompleted.push(true);

// console.log(levelsCompleted);

// let destinations = ["Tokyo", "Istanbul", "Kyoto", "Melbourne", "Sydney"];

// destinations.shift(0);

// console.log(destinations);

// destinations.unshift("New York");

// console.log(destinations);

// let age = [18, 21, 22, 20, 23, 36, 79];
// let index = 0;
// while (index <= age.length) {
//   age[index] = age[index] + 5;
//   index++;
// }
// console.log(age);

// let index = 0;
// let numbers = [1, 5, 6, 7, 9, 20, 34, 40, 45, 50, 51, 52, 53, 55, 57];
// let sum = 0;

// while (index < numbers.length) {
//   sum = numbers[index] + sum;
//   index++;
// }
// console.log("sum", sum);

// let numbers = [1, 5, 6, 7, 9, 20, 34, 40, 45, 50, 51, 52, 53, 55, 57];
// let highest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > highest) {
//     highest = numbers[i];
//   }
// }
// console.log(highest);

// let smallest = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }
// console.log(smallest);

// // numbers.unshift(8997);
// // numbers.push(567);

// console.log(numbers);

let numbers = [1, 5, 6, 7, 9, 20, 34, 40, 45, 50, 51, 52, 53, 55, 57];
let odd = 0;
let even = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(odd, even);
