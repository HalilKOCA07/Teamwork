//* ==============================================
//*                  EVENTS
//* ===============================================

const h3 = document.querySelector("h3")
const addButton = document.getElementById("btn")
const guessNumber = document.querySelector("#guessingnumber")
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
else if (isNaN(userInput.value)){
    guessNote.textContent = `Lutfen geçerli bir icerik giriniz`
    userInput.value = ""
    return
}
  
else if (userInput.value === pcSayi){
    guessNote.textContent = `Congratulations! You are right...`
    userInput.value = ""
    return
}

else if (userInput.value < 0 || userInput.value > 100) {
   guessNote.textContent = `You must guess between 1 and 100...`
   userInput.value = ""
   return
}
  
else if (userInput.value < pcSayi) {
   guessNote.textContent = `You must guess a bigger number...`
   userInput.value = ""
   return
}
  
else if (userInput.value > pcSayi) {
   guessNote.textContent = `You must guess a lower number...`
   userInput.value = ""
   return
}
  
const spanEnterNumber = document.createElement("span")
    spanEnterNumber.textContent = `${userInput.value}   `
    guessNumber.appendChild(spanEnterNumber)
    console.log(spanEnterNumber)
    userInput.value = ""
  
}

userInput.onkeydown = function (e) {
    //   console.log(e.code)
    if (e.code === "B") {
      addButton.click()
    }
  }
  