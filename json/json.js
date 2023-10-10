/* eslint-disable object-curly-newline, no-console, no-debugger */
const topicId = 1;

// 1. JSON.stringify() - Convert JavaScript to JSON
if (topicId === 1) {
  const jsAuthor = {
    name: 'Joey R',
    age: 29,
    active: true,
    articles: ['Learn Javascript', 'Learn NodeJS', 'Learn React'],
    address: { street: '123 Main St', city: 'New York', state: 'NY', zip: '20001' },
  };
  const jsArticles = [
    { id: 5362, title: 'Learn JavaScript', author: 'Joey R', content: 'Lorem Ipsum' },
    { id: 5363, title: 'Learn NodeJS', author: 'Joey R', content: 'Lorem Ipsum' },
    { id: 5364, title: 'Learn React', author: 'Joey R', content: 'Lorem Ipsum' },
  ];

  const author = JSON.stringify(jsAuthor);
  const articles = JSON.stringify(jsArticles);
  console.log(author);
  console.log(articles);
}

// 2. JSON.parse() - Convert JSON to JavaScript
if (topicId === 2) {
  const jsonAuthor = `{
    "name": "Sheena R",
    "age": 25,
    "active": true,
    "articles": ["Learn HTML", "Learn SQL", "Learn Unix"],
    "address": { "street": "123 Sunset Blvd", "city": "Los Angeles", "state": "CA", "zip": "90001" }
  }`;
  const jsonArticles = `[
    { "id": 5365, "title": "Learn HTML", "author": "Sheena R", "content": "Lorem Ipsum" },
    { "id": 5366, "title": "Learn SQL", "author": "Sheena R", "content": "Lorem Ipsum" },
    { "id": 5367, "title": "Learn Unix", "author": "Sheena R", "content": "Lorem Ipsum" }
  ]`;

  const author = JSON.parse(jsonAuthor);
  const articles = JSON.parse(jsonArticles);
  console.log(author);
  console.log(articles);
}
