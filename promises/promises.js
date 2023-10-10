/* eslint-disable no-console, arrow-body-style, prefer-arrow-callback */
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const topicId = 1;

// BROWSER APIs THAT RETURN PROMISES
// 1. Consume already existing promises - Fetch API example
if (topicId === 1) {
  // Check if function returns a promise
  const res = fetch('https://www.example.com');
  const isProm = res instanceof Promise; // returns true
  console.log('Function returns promise:', isProm);

  // Fetch - Thenables:
  btn.addEventListener('click', function eventHandler() {
    console.clear();
    let isLoading = true;
    console.log(1, 'isLoading:', isLoading);
    const apiTestUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiTestUrl)
      .then((res) => { return res.json(); })
      .then((data) => { console.log(2, data); })
      .catch((err) => { console.error(2, err.toString()); })
      .finally(() => { console.log(3, 'isLoading:', isLoading = false); });
    console.log(4, 'Last statement.');
  });

  // fetch with async...await
  btn2.addEventListener('click', async function eventHandler() {
    console.clear();
    let isLoading = true;
    console.log(1, 'isLoading:', isLoading);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      console.log(2, data);
    } catch (err) {
      console.error(2, err.toString());
    }
    console.log(3, 'isLoading:', isLoading = false);
  });

  // fetch with async...await invalid domain
  btn3.addEventListener('click', async function eventHandler() {
    console.clear();
    let isLoading = true;
    console.log(1, 'isLoading:', isLoading);
    try {
      const res = await fetch('http://no-such-url.com');
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      console.log(2, data);
    } catch (err) {
      console.error(2, err.toString());
    }
    console.log(3, 'isLoading:', isLoading = false);
  });
}

// 2. Create a Promise object - setTimeout simulated db query
if (topicId === 2) {
  const simulateDbQuery = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function processQuery() {
        console.log('Processing the database query'); 
        const success = Math.round(Math.random()) === 1; // Randomly returns true or false
        if (success) {
          const data = ['Joey', 'Sheena', 'Johnny', 'Judy'];
          resolve(data);
        } else {
          const reason = 'There was a problem';
          reject(reason);
        }
      }, 2000);
    });
  };

  // Handle Promise results using thenables: Instance methods then, catch, finally
  btn.addEventListener('click', function eventHandler() {
    console.clear();
    console.log(1, 'First statement');

    simulateDbQuery()
      .then((data) => { console.log(2, data); })
      .catch((err) => { console.error(2, err); })
      .finally(() => console.log(3, 'Promise has settled.'));

    console.log(4, 'Last statement');
  });

  // Handle Promise results using await in an async function
  btn2.addEventListener('click', async function eventHandler() {
    console.clear();
    console.log(1, 'First statement.');
    try {
      const data = await simulateDbQuery();
      console.log(2, data);
    } catch (err) {
      console.error(2, err);
    }
    console.log(3, 'Last statement.');
  });

  // View the promise object internal properties
  btn3.addEventListener('click', async function eventHandler() {
    console.clear();
    const prom = simulateDbQuery();
    console.log(1, prom);
    const data = await prom;
    console.log(2, data);
  });
}

// STATIC METHODS
// 3. Static Methods - resolve, reject
if (topicId === 3) {
  btn.addEventListener('click', async function eventHandler() {
    console.clear();
    const res = await Promise.resolve('This is a resolved promise value.');
    console.log(1, res); // logs: 1 'This is a resolved promise value.'
  });

  btn2.addEventListener('click', async function eventHandler() {
    console.clear();
    try {
      await Promise.reject(new Error('This promise was rejected.'));
    } catch (err) {
      console.error(2, err.toString()); // logs: 2 'Error: This promise was rejected.'
    }
  });
}

// 4. Static Methods - any, race, all, allSettled
if (topicId === 4) {
  btn.addEventListener('click', async function eventHandler() {
    console.clear();

    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('1 Rejected after 1 sec')), 1000);
    });
    const prom2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve('2 Resolved after 2 secs'), 2000);
    });
    const prom3 = new Promise((resolve, reject) => {
      setTimeout(() => resolve('3 Resolved after 3 secs'), 3000);
    });

    // Promise.any()
    /* const res = await Promise.any([prom1, prom2, prom3]);
    console.log(res); // logs '2 Resolved after 2 secs' */

    // Promise.race()
    /* try {
      const res = await Promise.race([prom1, prom2, prom3]);
      console.log(res);
    } catch (err) {
      console.error(err); // logs 'Error: 1 Rejected after 1 sec'
    } */

    // Promise.all()
    /* try {
      const res = await Promise.all([prom1, prom2, prom3]);
      console.log(res);
    } catch (err) {
      console.error(err); // logs 'Error: 1 Rejected after 1 sec'
    } */

    // Promise.allSettled()
    const res = await Promise.allSettled([prom1, prom2, prom3]);
    console.log(res);
  });
}

// 5. Asynchronous function.
if (topicId === 5) {
  console.log(1, 'First statement.');

  // Asynchronous function.
  const simulateDbQuery = (dbCallback) => {
    setTimeout(function processQuery() {
      const data = ['Joey', 'Sheena', 'Johnny', 'Judy'];
      return dbCallback(data);
    }, 2000);
  };

  // Callback function.
  const dbCallback = (data) => {
    console.log(2, data);
  };

  // Function call
  simulateDbQuery(dbCallback);

  console.log(3, 'Last statement.');
}
