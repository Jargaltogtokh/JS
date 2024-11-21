let array = [2, 3, 4, 5, 6];
function Square(currentValue, index, originalArray) {
  return currentValue ** 2;
}

const newArray = array.map(Square);

console.log(newArray);

let number = [99019079, 99955841, 99991533];
function Divide(currentValue, index, originalArray) {
  currentValue = Math.floor(currentValue / 10000);
  return currentValue;
}

let newArr = number.map(Divide);
console.log(newArr);
let products = [
  { product: milk, price: 4000, rate: star },
  { product: notebook, price: 2000, rate: star },
  { product: candy, price: 500, rate: noStar },
  { product: water, price: 1500, rate: star },
  { product: chocolate, price: 6000, rate: star },
  { product: towel, price: 2500, rate: noStar },
];

function renderProductList() {
  const container = document.getElementById("productlist");
}

renderProductList();
