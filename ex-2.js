// Exercise2: Counting Vowels

function countVowels(words) {
  // Start coding here
  words = words.toLowerCase();
  let numberOfVowels = 0;
  for (let i = 0; i < words.length; i++) {
      if (words[i] === 'a' || words[i] === 'e' || words[i] === 'i' || words[i] === 'o' || words[i] === 'u') {
          numberOfVowels++;
      }
  }
  return numberOfVowels;
};

countVowels("Hello World"); // 3 (e, o, o)
countVowels("TechUp"); // 2 (e, U)
