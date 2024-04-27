const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

///Destructring with Rest operator
const [primaryGenre, secondaryGenre, ...otherGeners] = genres;
console.log(primaryGenre, secondaryGenre, otherGeners);

//Spread Operator
const newGenre = [...genres, "epic fantasy"];
console.log(newGenre);

//Spread operator with objects
const updatedBook = {
  ...book,
  //Adding a new property
  movieDate: "9-4-2024",
  //Overwriting a property
  pages: 1300,
};
console.log(updatedBook);

//Template Literals

const summary = `${title} is a book was published on ${
  publicationDate.split("-")[0]
} and it was written by ${author}`;
summary;

///Ternary Operators
const ternary = pages > 1000 ? "Big Book" : "small Book";
ternary;
console.log(
  `This ${title} book has ${
    hasMovieAdaptation ? "" : "not"
  } been adapted for movie`
);

//  Arrow Function

const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

//Short Circuiting and logical Operator

console.log(true && "This will go to second operand bcz first is true");
console.log(false && "It doesnt even look here cuz first operand is false");

console.log(hasMovieAdaptation && "This book has movie adaptation");

//OR operator(oposite of AND)

console.log(true || "it doesnt look here");
console.log(false || "it comes to seconf operand unlike AND opeator");

console.log(book.translations.spanish);

const spanishTranslation =
  book.translations.spanish || "Not translated to spanish";
spanishTranslation;

//Knowlegde coelasing
console.log(book.reviews.librarything.reviewsCount);
//Actually its zero not no data but or operation shows second operand so for this js has
// introduced knowldege coelasing which is like short circuiting but it gives answer as same
const check = book.reviews.librarything.reviewsCount || "No data";
check;

//with Knowlegde coelasing
const check2 = book.reviews.librarything.reviewsCount ?? "No data";
check2;

//Optional Chaining
const getTotalReviewCount = (book) => {
  const countGoodRead = book.reviews.goodreads?.reviewsCount;
  const countLibraryRead = book.reviews.librarything?.reviewsCount ?? 0;
  return countGoodRead + countLibraryRead;
};
console.log(getTotalReviewCount(book));

//ARRAY METHODS
//These methods donot mutate the array
//MAP METHOD
//map requires a call back function and the element parameter will always be the current element of array

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x);

const bookTitles = data.map((el) => el.title);
console.log(bookTitles);
//or
const books = getBooks();
books;
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

//FILTER METHOD
//in this method we can filter out of objects or array based on some conditions

const moreThan500 = books.filter((book) => book.pages > 500);
console.log(moreThan500);

// const adventureBooks = books
//   .filter((books) => books.genres.include("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

//Reduce Method
const allPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(allPages);

//Sort Method
//FOR ASCENDING WAY (a-b) For descending (b-a) and it mutates the array so make copy with slice
const arr = [2, 5, 1, 7, 3, 6];
const sortedAsc = arr.sort((a, b) => a - b);
// const sortedDes = arr.sort((a, b) => b - a);
console.log(sortedAsc);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

/// PROMISE/ASYNC/AWAIT

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("sufyan");

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("errror");
  }
}

console.log("sufyan");

getTodos();
