/* eslint-disable no-unused-expressions, no-debugger, no-console */
const topicId = 2;

// 1. Console
if (topicId === 1) {
  console.log('2. Console');

  console.log('This is a message.');

  const res = console.log('This is a message'); // logs "This is a message"
  res; // returns undefined

  console.log(1, 'First message');
  console.log('\n');
  console.log(2, 'Second message');

  console.info('Log info');
  console.warn('This is a warning');
  const err = new Error('This is an error');
  console.error(err.message);
  debugger;

  console.clear();
}

// 2. Location
if (topicId === 2) {
  console.log('2. Location');
  const locationObj = location;
  console.log(1, location.toString());
  console.log(2, location.href);
  console.log(3, location.origin);
  console.log(4, location.protocol);
  console.log(5, location.host);
  console.log(6, location.hostname);
  console.log(7, location.port);

  debugger;
  console.clear();
}

// 3. History (skip this topic)
// 4. Web Storage
if (topicId === 4) {
  // Session storage
  let view = sessionStorage;
  sessionStorage.setItem('name', 'Joey');
  let name = sessionStorage.getItem('name');
  name; // returns "Joey"
  debugger;
  sessionStorage.removeItem('name');
  debugger;

  // Session storage - store object
  let user1String = JSON.stringify({ id: 1, name: 'Joey', active: true });
  sessionStorage.setItem('user', user1String);
  user1String = sessionStorage.getItem('user');
  const user1Obj = JSON.parse(user1String);
  debugger;
  sessionStorage.removeItem('user');
  debugger;

  // Local Storage
  view = localStorage;
  localStorage.setItem('name', 'Sheena');
  name = localStorage.getItem('name');
  debugger;
  localStorage.removeItem('name');
}

// 5. Timers
if (topicId === 5.1) {
  setTimeout(() => {
    console.log('Logs after 2 seconds');
  }, 2000);
  console.log('This logs first');
}
if (topicId === 5.2) {
  let i = 1;
  setInterval(() => {
    console.log(i++);
  }, 1000); // counter continues until page is closed
}
if (topicId === 5.3) {
  i = 1;
  const intervalID = setInterval(() => {
    console.log(i++);
    if (i === 6) clearInterval(intervalID);
  }, 1000);
}

// 6. Fetch
if (topicId === 6) {
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      return data;
    }
    catch (err) {
      console.error(err.toString());
      return false;
    }
  }
  btn.addEventListener('click', async () => {
    let url = 'https://jsonplaceholder.typicode.com/users';
    // url = 'https://jsonplaceholder.typicode.com/badpath';
    // url = 'http://no-such-url.com';
    const users = await fetchData(url);
    if (users) {
      let names = '';
      users.forEach(item => names += `<li>${item.name}</li>`);
      result.innerHTML = `<ul>${names}</ul>`
    } else {
      result.innerHTML = '<b>Could not fetch data.</b>';
    }
  });
}
