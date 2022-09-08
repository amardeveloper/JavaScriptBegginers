//Use trim() to remove any trailing whitespace at the beginning and the end of a string.

const greeting = '   Hello world!   ';

console.log(`"${greeting}"`);
// expected output: "   Hello world!   ";

console.log(`"${greeting.trim()}"`);
// expected output: "Hello world!";