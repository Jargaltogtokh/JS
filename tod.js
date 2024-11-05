/* 1. Төсвийн хянагч (Budget Tracker)
Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.
Ажлын өдрүүдэд (Даваа - Баасан) зардал $15 байх болно.
Амралтын өдрүүдэд (Бямба, Ням) зардал $25 байх болно.
Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.*/

let day = 1; // 1,2,3,4,5,6,7
expense = 0;
budget = 100;

while (expense <= budget);
{
  if (day <= 5) {
    expense = expense + 5;
  } else if (day > 5 && day <= 7) {
    expense = expense + 10;
  }
  console.log(day, expense);

  if (expense >= 80 && expense <= 100) {
    console.log("Таны нийт зардал 100 руу дөхөж байна шүү");
  } else if (expense > 99) {
    console.log("Та зардлын хязгаарт хүрлээ");
  }

  day++;

  if (day >= 7) {
    day = 1;
  }
}

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
