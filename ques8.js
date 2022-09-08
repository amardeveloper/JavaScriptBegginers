// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

const paragraph = 'You cannot end a sentence with because because because is a conjunction';

const searchTerm = 'because';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`the word "${searchTerm}" first appears at ${indexOfFirst+1} position.`)


// expected output: the word "because" first appears at 32 position.
