function calculateProblems(count) {
  let problemsPerHour = 2;
  totalHours = count / 2;
  console.log(
    "I solved" + " " + count + " problems" + " for " + totalHours + " hours"
  );
}

calculateProblems(6);

function printFavoriteFood() {
  let name = "Sarah";
  food = "pizza";
  console.log(name + " loves to eat " + food);
}
printFavoriteFood();

function printWeather() {
  let cityname = "Chicago";
  weather = 32;
  console.log(cityname + " is " + weather + " celcuis");
}
printWeather();

function printBookDetails() {
  let author = "J.K. Rowling";
  title = "Harry Potter";
  yearPublished = 1997;
  console.log(author + " wrote " + title + " in " + yearPublished);
}
printBookDetails();

function calculateArea() {
  let width = 10;
  height = 20;
  console.log(width * height);
  return width * height;
}
calculateArea();

function calculateVolume() {
  let width = 10;
  height = 20;
  depth = 30;
  console.log(width * height * depth);
  return width * height * depth;
}
calculateVolume();

function printTicketInfo() {
  let eventName = "New Year";
  ticketPrice = 200;
  discount = "20%";
  console.log(
    eventName +
      " was " +
      ticketPrice +
      "k." +
      " Earlybird discount was " +
      discount
  );
}
printTicketInfo();

const cafe = {
  name: "Matcha",
  location: "Zaisan",
  menu: "Japanese",
  discount: function () {
    console.log("20%");
  },
  owner: {
    name: "Oyun",
    shareholders: ["Naraa", "Boldoo", "Ariunaa"],
    chairman: "Tsetseg",
  },
};

console.log(cafe.menu);

cafe.discount();

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

for (let i = 0; i < books.length; i++) {
  if (books[i].year >= 1960) {
    console.log(books[i].year);
  }
}

for (let i = 0; i < books.length; i++) {
  if (books[i].year >= 1960) {
    console.log(books[i]);
  }
}

function filterBooksByYear(year) 
{let filteredBooks=[]; for (let i =0; i < books.length, i++) {const thatBooksYear = books[i].year;
  if (thatBooksYear >=year) {filteredBooks.push(books[i]);}
 }return filteredBooks}

const filteredBooks = filterBooksByYear(1960)
console.log (filteredBooks