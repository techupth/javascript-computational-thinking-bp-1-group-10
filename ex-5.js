// Exercise (Challenge)5: Letter Frequency

function getLetterFrequency(words) {
  // Start coding here
  const frequency = {};
  const letters = words.toLowerCase();
  for (const letter of letters) {
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }
    return frequency;
}

const str = "Techupth";

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
    h: 2,
    u: 1,
    p: 1
}
*/
