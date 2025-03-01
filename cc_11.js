// Task 1 - Created Book Class

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    // Method to get book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    // Method to update copies
    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Testing Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"



// Task 2 - Created Borrower Class

class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    // Method to return a book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

// Testing Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []



// Task 3 - Created Library Class

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to list all books in the library
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

// Testing Task 3
const library = new Library();
library.addBook(book1);
library.listBooks(); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"



// Task 4 - Implemented Book Borrowing

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    // Method to lend a book to a borrower
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        } else {
            console.log("Either the book is unavailable or the borrower does not exist.");
        }
    }
}

// Testing Task 4
library.lendBook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]



// Task 5 - Implemented Book Returns
class Library {
    constructor() {
      this.books = [];
      this.borrowers = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    listBooks() {
      this.books.forEach(book => {
        console.log(book.getDetails());
      });
    }
  
    lendBook(borrowerId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  
      if (book && borrower && book.copies > 0) {
        book.updateCopies(-1);
        borrower.borrowBook(book.title);
      }
    }
  
    returnBook(borrowerId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
  
      if (book && borrower) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
      }
    }
  }
  
  // Test case
  const library = new Library();
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
  library.addBook(book1);
  const borrower1 = new Borrower("Alice Johnson", 201);
  library.borrowers.push(borrower1);
  
  library.lendBook(201, 123456);
  console.log(book1.getDetails());  // "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
  console.log(borrower1.borrowedBooks);  // ["The Great Gatsby"]
  
  library.returnBook(201, 123456);
  console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
  console.log(borrower1.borrowedBooks); // Expected output: []