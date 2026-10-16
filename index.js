// array

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

// bool

// .toString()
// ubah ke string

// .valueOf()
// ambil nilai bool

// string

// .repeat()
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// .trim()

// .normalize()

// .padEnd()

// .trim()

// object
