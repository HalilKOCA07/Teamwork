function reverseWordsWithoutArray(sentence) {
  let reversedSentence = "";
  let word = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] === " " || i === 0) {
      if (i === 0) {
        word += sentence[i];
      }
      for (let w = word.length - 1; w >= 0; w--) {
        reversedSentence += word[w];
      }
      if (i !== 0) {
        reversedSentence += " ";
      }
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return reversedSentence;
}

const inputSentence = prompt("Enter Your Sentence to Reverse:");
const reversedSentence = reverseWordsWithoutArray(inputSentence);
alert(reversedSentence);
