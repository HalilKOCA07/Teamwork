/*function reverseWordsWithoutArray(sentence) {
    let reversedSentence = "";
    let word = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i] === " " || i === 0) {
    // Append the word (in reverse) to the result
    if (i === 0) {
    word += sentence[i]; // Include the first character of the first word
    }
    // for (let j = word.length - 1; j >= 0; j--) {
    // reversedSentence += word[j];
    // }
    // If not the last word, add a space
    if (i !== 0) {
    reversedSentence += " ";
    }
    // Reset the temporary word
    word = "";
    } else {
    // Build the word
    word += sentence[i];
    }
    }
    return reversedSentence;
   }
   // Test the function
   const inputSentence = "Hello World naber dostum";
   const reversedSentence = reverseWordsWithoutArray(inputSentence);
   console.log(reversedSentence); // Output: "World Hello" */

            //? ********* Reverse Word in a String *********

            function reverseWordsWithoutArray(sentence) {
                let reversedSentence = "";
                let word = "";
                for (let i = sentence.length - 1; i >= 0; i--){

                    if (sentence[i] === " " || i === 0){
              // Append the word (in reverse) to the result
              if (i === 0){
                word += sentence[i];
                }
                for (let w = word.length -1; w >= 0; w--){
                    reversedSentence += word[w];
                    }
                // If not the last word, add a space
                if (i !== 0){
                    reversedSentence += " ";
                    }
                // Reset the temporary word
                word = "";
                }
        else {
                // Build the word
            word += sentence[i];
        }
    }
    return reversedSentence;
}
               // Test the function
               const inputSentence = "Hello World naber dostum";
               const reversedSentence = reverseWordsWithoutArray(inputSentence);
               console.log(reversedSentence); // Output: "World Hello"

//? function reverseWordsWithoutArray(sentence) {

//?     let reversedSentence = "";
//?     let word = "";
                    //*     Hello World naber dostum

    //? for (let i = sentence.length - 1; i >= 0; i--) {
    //?     if (sentence[i] === " " || i === 0) {
    // Append the word (in reverse) to the result
            //? if (i === 0) {
            //?      word += sentence[i];                   // Include the first character of the first word
            //?     }
            //? for (let j = word.length - 1; j >= 0; j--) {
            //?      reversedSentence += word[j];
            //?     }
    // If not the last word, add a space
            //? if (i !== 0) {
            //?      reversedSentence += " ";
            //?     }
    // Reset the temporary word
        //?         word = "";
        //? } 
        //? else {
    // Build the word
//?             word += sentence[i];
//?         }
//?     }
    
//?     return reversedSentence;
//?    }
   // Test the function
//?    const inputSentence = "Hello World naber dostum";
//?    const reversedSentence = reverseWordsWithoutArray(inputSentence);
//?    console.log(reversedSentence); 
    // Output: "World Hello"