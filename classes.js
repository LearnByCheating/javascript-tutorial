/* eslint-disable new-parens, no-multi-assign, lines-between-class-members, max-len, dot-notation, no-unused-vars, no-debugger, max-classes-per-file */

let view;

const topicId = 1;

// 1 and 2. Class declarations and Instance properties.
if (topicId === 1) {
  // If you will have multiple objects with the same properties, create a class.
  class Author {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const author1 = new Author('Joey', 32);

  class Book {
    constructor(title, price, categories, author) {
      this.title = title;
      this.price = price;
      this.categories = categories;
      this.author = author;
    }
  }
  const book1 = new Book('Learn JavaScript', 19.95, ['education', 'tech'], author1);
  const book2 = new Book('Learn Node.js', 23.95, ['education', 'tech'], author1);
  const book3 = new Book('Learn Express', 25.95, ['education', 'tech'], author1);
  debugger;

  // Instance properties
  // Dot or bracket notation.
  view = book1.title;
  view = book1['price'];
  // Property values can be other objects. Chain the property names to access them.
  view = book1.author.name;
  book1.price = 22.95;
  debugger;
}

// 3. Instance methods
if (topicId === 3) {
  class Author {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    addYear() { this.age += 1; }

    log() { return `${this.name} is ${this.age} years old.`; }
  }
  const author1 = new Author('Joey R', 32);
  author1.addYear();
  view = author1.log();
  view = Object.getPrototypeOf(author1); // same as author1.__proto__
  debugger;

  class Book {
    constructor(title, price, published = false) {
      this.title = title;
      this.price = price;
      this.published = published;
      this.publishDate = published ? (new Date).toDateString() : null;
    }

    publish() {
      this.published = true;
      this.publishDate = (new Date).toDateString();
    }
  }
  const book1 = new Book('Learn JavaScript', 19.95);
  book1.publish(); // calls the publish instance method.
  debugger;
  view = '';
}

// 4. Static properties and methods.
if (topicId === 4) {
  class Author {
    // Instance properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.id = Author.count += 1;
    }
    // Instance method
    addYear() { this.age += 1; }
    // Static property
    static count = 0;
    // Static method
    static about() {
      return 'The Author class has properties for id, name, and age.';
    }
  }
  const author1 = new Author('Joey', 32);
  const author2 = new Author('Sheena', 28);
  const author3 = new Author('Judy', 22);
  author3.addYear();
  view = Author.about();
  view = Author.count;
  debugger;

  // Open Author constructor function (aka the Author class). Static properties and methods are attached to Author. Instance methods are attached to Author.prototype
  view = Object.getPrototypeOf(author3); // same as author3.__proto__
  view = Object.getPrototypeOf(author3) === Author.prototype;
  view = typeof Author.prototype;
  view = author3.constructor;
  view = author3.constructor === Author;
  view = typeof Author;
  view = author3 instanceof Author;
  view = Author instanceof Object;
  debugger;
}

// 5. Inheritance.
if (topicId === 5) {
  // Parent class
  class Product {
    constructor(price, quantity) {
      this.price = price;
      this.quantity = quantity;
    }
  }

  // Child class
  class Book extends Product {
    constructor(title, author, price, quantity) {
      super(price, quantity);
      this.title = title;
      this.author = author;
    }
  }
  const book1 = new Book('Learn JavaScript', 'Judy R', 19.95, 27);

  // The prototype chain: book1 > Book > Product > Object
  view = book1.constructor === Book;
  view = Object.getPrototypeOf(book1) === Book.prototype;
  view = book1 instanceof Book;
  view = book1 instanceof Product;
  view = book1 instanceof Object;
  debugger;
}
