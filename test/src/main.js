// @ts-check
// Formatting, Linting
// Formatting: Prettier
// Linting: ESLint
// Type cheking: Typescript

// /* eslint-disable-next-line no-console */
// console.log('hello, world!');

// // Type error
// const someString = 'Hello';
// Math.log(someString);

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`);
});
