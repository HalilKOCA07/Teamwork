//* ==============================================
//*                  EVENTS
//* ===============================================

const h3 = document.querySelector("h3")
const addButton = document.getElementById("btn")
const guessNumber = document.querySelector("ul")
const guessNote = document.querySelector("#guessnote")
const health = document.querySelector("#remaingright")
const body = document.querySelector("body")
const userInput = document.getElementById("userinput")
let pcSayi = [Math.floor(Math.random() * 101)];
console.log(pcSayi)
body.onload = function () {
    userInput.focus()
}

addButton.onclick = (e) => {

    userInput.focus()
    guessNote.textContent = `Congratulations! You are right... ${pcSayi} `

if (!userInput.value.trim()){
    guessNote.textContent = `Lutfen  bir sayı giriniz`
    userInput.value = ""
    return
}
if (isNaN(userInput.value)){
    guessNote.textContent = `Lutfen geçerli bir icerik giriniz`
    userInput.value = ""
    return
}
  
if (userInput.value === pcSayi){
    guessNote.textContent = `Congratulations! You are right...`
}

if (userInput.value < 0 || userInput.value > 100) {
   guessNote.textContent = `You must guess between 1 and 100...`
}
  
else if (userInput.value < pcSayi) {
   guessNote.textContent = `You must guess a bigger number...`
}
  
else if (userInput.value > pcSayi) {
   guessNote.textContent = `You must guess a lower number...`
}
  
const spanEnterNumber = document.createElement("span")
    spanEnterNumber.textContent = `${userInput.value}   `
    guessNumber.appendChild(spanEnterNumber)
    console.log(spanEnterNumber)
    userInput.value = ""
  
}
