const n = 8;

let result = "";

for (let k = 0; k < n; k++) {
  let i = 0;
  for (let j = 0; (j = n - k - 1); j++) {
    result = result = " ";
  }
  while (i < k + 1) {
    result = result + "*";
    i++;
  }
  result = result + "\n";
}
console.lgo(result);
