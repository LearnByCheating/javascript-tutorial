/* eslint-disable max-len, no-use-before-define, no-shadow, prefer-arrow-callback, no-console, no-inner-declarations */
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const topicId = 3;

// 1. Call stack
if (topicId === 1) {
  const bookId = 'abc123';
  const price = 29.95;
  const creditcard = '1111222233334444';

  const status = orderBook(bookId, price, creditcard); // Step 1

  function orderBook(bookId, price, creditcard) {
    const inStock = checkStock(bookId); // Step 2
    if (!inStock) return 'Out of stock';

    const paid = chargeCard(price, creditcard);// Step 4
    if (!paid) return 'Credit Card denied';
    return 'Order complete'; // Step 6
  }

  function checkStock(bookId) { // Step 3
    console.log(`Checking database for bookId: ${bookId}`);
    return true; // true if in stock, false if not
  }

  function chargeCard(price, creditcard) { // Step 5
    console.log(`Charging card $${price}`);
    return true; // true if successfully charged, false if not
  }

  console.log(status); // logs "Order is complete"
}

// 2. Synchronous Web APIs
if (topicId === 2) {
  sessionStorage.setItem('name', 'Joey');
  const name = sessionStorage.getItem('name'); // gets the name item from browser storage.
  result.textContent = name; // displays "Joey" on the web page.
  console.log(name); // logs "Joey"
  sessionStorage.removeItem('name');
}

// 3. Asynchronous Web APIs
if (topicId === 3) {
  btn.addEventListener('click', function eventHandler() {
    result.textContent = 'Button was clicked';
  });

  btn.addEventListener('dblclick', function eventHandler() {
    console.log(1, 'First statement.');
    setTimeout(function twoSecondsAsync() {
      console.log(2, 'SetTimeout callback, logs after 2 seconds');
    }, 2000);
    console.log(3, 'Third statement.');

    setTimeout(function noDelayAsync() {
      console.log(4, 'SetTimeout callback, logs after 0 seconds');
    }, 0);

    console.log(5, 'last statement.');
  });
}
