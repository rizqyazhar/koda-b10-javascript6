// BUILT-IN FUNCTION

// ARRAY

// .toReversed()
const books = ["Harry Potter", "Laskar Pelangi"];
const reversedBookOrder = books.toReversed();
console.log(reversedBookOrder);

// .includes()
const booksGenre = ["Fiksi", "Action", "Romance", "Adult"];
console.log(books.includes("Adult"));

// .slice()
console.log(booksGenre.slice(1, 3));

// .shift()
const booksRating = [9, 8, 7, 5, 7];
const tryShift = booksRating.shift();
console.log(booksRating);
console.log(tryShift);

// .join()
console.log(booksGenre.join(" - "));

// STRING

// .repeat()
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// .trim()
const clearSpace = (input) => {
  const spaceCleared = input.trim();

  return spaceCleared;
};

const userInput = "  John Doe ";
console.log(`uncleared:${userInput}`);

console.log(clearSpace(`cleared:${userInput}`));

// .substring()
const menu = ["Meat Mania Pizza (regular)", "Meat Mania Pizza (personal)"];

console.log(menu[0].substring(0, menu[0].length - 10));

// .padEnd()
const pizza = [
  { name: "Meat Mania Pizza (regular)", price: 60000 },
  { name: "Meat Mania Pizza (personal)", price: 30000 },
];

pizza.forEach((p) => {
  console.log(`${p.name.padEnd(30, " ")}: ${p.price}`);
});

// .startsWith()
const userName = "!johndoe";

const userValidator = (name) => {
  return name.startsWith("!") ? "Input tidak sesuai!" : null;
};

console.log(userValidator(userName));

// OBJECT

// .groupBy()
const movie = [
  { name: "Resident Evil", rating: 7 },
  { name: "Monster", rating: 9 },
  { name: "The Town", rating: 8 },
  { name: "Verity", rating: 7 },
  { name: "Deadpool", rating: 6 },
  { name: "End Game", rating: 8 },
];

const rating = Object.groupBy(movie, ({ rating }) =>
  rating > 7 ? "good" : "decent",
);

console.log(rating.good);

// Object.keys()

const detailedMovie = {
  sutradara: "Anthony Russo dan Joe Russo",
  produser: "Kevin Feige",
  penulisNaskah: ["Christopher Markus", "Stephen McFeely"],
  perusahaanProduksi: "Marvel Studios",
  distributor: "Walt Disney Studios Motion Pictures",
  tanggalRilisAsli: "26 April 2019",
  tanggalRilisVersiEncore: "23 September 2026",
  estimasiAnggaran: "$356 juta – $400 juta",
  totalPendapatan: 293000000000,
};

const getKey = Object.keys(detailedMovie);
console.log(getKey);

// Object.values()

const getValue = Object.values(detailedMovie);
console.log(getValue);

// Object.hasOwn()

console.log(Object.hasOwn(detailedMovie, "produser"));

// Object.create()

const newMovie = Object.create(detailedMovie);

newMovie.produser = "John Doe";
newMovie.totalPendapatan = "900000000";

console.log(newMovie);

// BOOLEAN

// .toString()

const pinjam = [
  { name: "John Doe", hutang: 50000000, sudahBayar: true },
  { name: "Josh Doe", hutang: 5000000, sudahBayar: false },
];

pinjam.forEach((p) => {
  console.log(typeof p.sudahBayar.toString());
});

// .valueOf()

const getData = (data) => {
  if (data.valueOf() === false) return;

  return "data ada";
};

console.log(getData(pinjam));

// OTHER

// Math.random() dan Math.floor

function drawRandomRect() {
  const getX = Math.floor(Math.random() * 10);
  const gety = Math.floor(Math.random() * 10);

  return {
    panjang: getX,
    lebar: gety,
    luas: getX * gety,
  };
}

console.log(drawRandomRect());

// .getFullYear()

const getYearNow = new Date();

console.log(getYearNow.getFullYear());

// BUILT-IN FUNCTION

// parseInt()

const ageUser = "20";

const ageValidator = (a) => {
  return parseInt(a);
};

console.log(typeof ageValidator(ageUser));

// parseInt()

const celciusToKelvin = (c) => {
  return c + 273.15;
};

const celcius = 50;

console.log(celciusToKelvin(parseFloat(celcius)));

// isNaN

const nanChecker = (t) => {
  return isNaN(t) ? "Sudah benar" : "Not a Number!";
};

const noTelp = "089745371629";

console.log(nanChecker(noTelp));

//

// encodeURI()

const user = {
  name: "John Doe",
  age: 20,
  year: 3,
};

const searchUserByName = (u) => {
  return `https://siakaduniversitas/mahasiswa?search=${encodeURI(u)}`;
};

console.log(searchUserByName(user.name));

// decodeURI

console.log(decodeURI("https://siakaduniversitas/mahasiswa?search=John%20Doe"));
