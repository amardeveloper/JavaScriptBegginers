const birthday = new Date('05 September, 2022 03:24:30');
const date1 = birthday.getDate();

console.log(birthday.getFullYear());
// 2022
console.log(birthday.getMonth()+1);
// month starts from zero i.e., january is 0

console.log(date1);
// expected output: 5

console.log(birthday.getDay());
//expected monday i.e., shown by 1

console.log(birthday.getHours());

console.log(birthday.getMinutes());

const start = Date.now();
//gives back total milliseconds evolved from jan 1 1970 till now.
console.log(`seconds elapsed = ${Math.floor(start / 1000)}`);