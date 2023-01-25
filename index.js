const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
const titleCased = () => {
  let tutorial2 = [];
  for (const member of tutorials) {
    let firstMemberArray = member.split(" ");
    let firstMemberArrayCapitalized = [];
  

for (const word of firstMemberArray)
      firstMemberArrayCapitalized.push(
        word[0].toUpperCase() + word.substring(1)
      );

let firstMemberFinal = firstMemberArrayCapitalized.join(" ");

  tutorial2.push(firstMemberFinal);
  }
  return tutorial2;
};
