//* ==============================================
//*                  EVENTS
//* ===============================================

//* --------------------------------------------
//?*!                 TANIMLAMA
//* --------------------------------------------
const container = document.querySelector(".container"); //=== CONTAINER
const h3 = document.querySelector("h3"); //=== HEADER
const addButton = document.getElementById("btn"); //=== BUTTON
const delButton = document.querySelector(".del-btn"); // === DELETE BUTTON
const guessNumber = document.querySelector("#guessingnumber"); // === Text
const guessNote = document.querySelector("#guessnote"); // === BİLGİLENDİRME
const health = document.querySelector("#remaingright"); // === KALAN HAK
const body = document.querySelector("body");
const userInput = document.getElementById("userinput"); // === İNPUT
let pcSayi = [Math.floor(Math.random() * 101)]; // === RANDOM
const yourNumber = document.getElementById("yournumber"); // === Girilen Sayılar

//* --------------------------------------------
//?*!                  STYLE
//* --------------------------------------------

yourNumber.className = "guess-note";
addButton.className = "button";
h3.className = "head";
delButton.className = "d-none";

//* --------------------------------------------
//?*!                  EVENTS
//* --------------------------------------------

console.log(pcSayi);
body.onload = function () {
  userInput.focus();
};

addButton.onclick = (e) => {

  userInput.focus();

  if (!isNaN(userInput.value)){

  const spanEnterNumber = document.createElement("span");
  spanEnterNumber.textContent = `${userInput.value}   `;
  yourNumber.appendChild(spanEnterNumber);
  }
  else{
    const spanEnterNumber = document.createElement("span");
    spanEnterNumber.textContent = ``;
    yourNumber.appendChild(spanEnterNumber);
  }

  delButton.className = "d-block";



  if (!userInput.value.trim()) {
    guessNote.textContent = `Lutfen  bir sayı giriniz`;
    guessNote.classList.add("fa-house-chimney", "fa-beat-fade", "guess-note-bir-sayi-gir");
    const spanEnterNumber = document.createElement("span");
    spanEnterNumber.textContent = ` `;
    yourNumber.appendChild(spanEnterNumber);
    userInput.value = "";
    return;
  } else if (isNaN(userInput.value)) {
    guessNote.textContent = `Lutfen geçerli bir icerik giriniz`;
    guessNote.classList.add("fa-house-chimney", "fa-beat-fade", "guess-note");
    userInput.value = "";

    return;
  } else if (userInput.value < 0 || userInput.value > 100) {
    guessNote.textContent = `You must guess between 1 and 100...`;
    guessNote.classList.add("fa-house-chimney", "fa-beat-fade", "guess-note");
    userInput.value = "";
    return;
  } else if (userInput.value < pcSayi) {
    guessNote.textContent = `You must guess a bigger number...`;
    guessNote.classList.add("fa-house-chimney", "fa-beat-fade", "congrats");
    userInput.value = "";
    return;
  } else if (userInput.value > pcSayi) {
    guessNote.textContent = `You must guess a lower number...`;
    guessNote.classList.add("fa-house-chimney", "fa-beat-fade", "congrats");
    userInput.value = "";
    return;
  } else if (userInput.value == pcSayi) {
    guessNote.textContent = ` `;

    //! DOĞRU SAYI BİLİNDİĞİ ZAMAN SİLİNECEK  ELEMENT
    guessNote.classList.add("d-none");
    addButton.classList.add("d-none");
    userInput.classList.add("d-none");
    delButton.classList.add("d-none");
    yourNumber.classList.add("d-none");

    //! DOĞRU SAYI BİLİNDİĞİ ZAMAN EKLENECEK ELEMENT
    const congrats = document.createElement("i"); //? 1- yeni bir li elementi olustur
    const textCongrats = document.createTextNode("Congrats! You are right..."); //? 2- Eger    text tabanlı bir element ise text dugumunu olustur
    congrats.appendChild(textCongrats); //? 3- Olusturulan text dugumunu yeni elemente bagla (append)
    h3.after(congrats);
    congrats.classList.add("congrats", "fa-solid", "fa-shake");
//!-------===================================================-------------
    const tryAgain = document.createElement("p"); //? 1- yeni bir li elementi olustur
    const textTry = document.createTextNode("If you want to play again,   press F5"); //? 2- Eger    text tabanlı bir element ise text dugumunu olustur
    tryAgain.appendChild(textTry); //? 3- Olusturulan text dugumunu yeni elemente bagla (append)
    congrats.after(tryAgain);
    tryAgain.classList.add("guess-note", "mt-5");

    //! DOĞRU SAYI BİLİNDİĞİ ZAMAN EKLENECEK BUTON



    userInput.value = "";
    return;
  }
  console.log(spanEnterNumber);
  userInput.value = "";
};

userInput.onkeydown = function (e) {
  console.log(e.code);
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    addButton.click();
  }
};

delButton.onclick = (e) => {
  if (yourNumber.children.length > 0) {
    yourNumber.lastElementChild.remove();
  } else if (yourNumber.children.length == 0) {
    delButton.classList.add("d-none")
     guessNote.textContent = ``;
  }
};

console.log(yourNumber.children.length);
console.log(yourNumber.children);

yourNumber.onkeydown = function (e) {
  console.log(e.code);
  if (e.code == "Enter") {
    delButton.click();
  }
};



