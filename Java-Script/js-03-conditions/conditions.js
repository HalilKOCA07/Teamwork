// * --------------------------------------
// *            KARAR YAPILARI
// * --------------------------------------


//! ÖRNEK-1
// console.log("*** CONDITIONS ***")

// let num1 = +(prompt('Enter a number.'))

// if (num1 < 0) {
//     console.log("Negative")
// }else if (num1 > 0) {
//     console.log("Positive")
// }else {
//     console.log("Zero")
// }

//! ÖRNEK-2

// const sayi1 = 10
// const sayi2 = 7
// const sayi3 = 9

//? 1. Yöntem
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("Enbüyük:", enBuyuk)

//? 2. Yöntem (nested if)
// if (sayi1 > sayi2){
//     if (sayi1 > sayi3){
//         console.log("Enbüyük:", sayi1)
// }}
// else if (sayi2 > sayi1){
//     if (sayi2 > sayi3){
//         console.log("Enbüyük:", sayi2)
// }}   
// else {
//     console.log("Enbüyük:", sayi3)
// }

//?-----------------------------
// if (sayi1 > sayi2 && sayi1 > sayi3){
//     console.log("Biggest Numer", sayi1)
// }
// if (sayi2 > sayi1 && sayi2 > sayi3){
//     console.log("Biggest Numer", sayi2)
// }
// if (sayi3 > sayi2 && sayi3 > sayi1){
//     console.log("Biggest Numer", sayi3)
// }

// const sayi1 = 15
// const sayi2 = 10
// const sayi3 = 9

// let enBuyuk = sayi1

// if (sayi2 > enBuyuk){
//     enBuyuk = sayi2
// }
// if (sayi3 > enBuyuk){
//     enBuyuk = sayi3
// }
// console.log("En Büyük Sayı: ", enBuyuk);

//! ÖRNEK-3 Condition bileşirme

const age = 20
const gender = "fMale"
const healty = true

condition = age >= 18 && gender.toLowerCase() === "male" && healty === true

if (condition){
    console.log("He must to be soldier")
}else{
    console.log("he can not be soldier")
}

//******************************************
//* TERNARY
//******************************************
const age2 = 20

// condition = age >= 18 && gender.toLowerCase() === "male" && healty === true

// condition = true ? console.log("He must to be soldier") : console.log("he can not be soldier")
age2 >= 18 ? console.log("He must to be soldier") : console.log("he can not be soldier")

//*****************************************
//* SHORT - CIRCUIT
//*****************************************

let salary = 40000
let year = 10
let marriage = true

//! && operatörü (true ise yanındaki ifadeyi çalışırır)
//? Tek condition ve tek durum
// year >= 10 && (salary = salary * 1.5)
// console.log("SALARY: ", salary);

year >= 10 && marriage === true && (salary = salary * 1.5)
console.log("SALARY: ", salary)

//! || operaörü (false ise yanındaki ifadeyi çalışırır)
const sene = 20
let result = "Ergen"

sene >= 18 || (result = "Çocuk")
console.log(result)

//? falsy bir degerin tespit edilip buna göre bir degiskene baslangic degeri vermek için kullanıma çok uygundur.
result = ""
let myVar = result || "noname"
console.log(myVar)

//? tek durum var ise short-circuit
//? 2 durum var ise ternary
//? 3-6 arasi durum var ise if-else
//? 6 dan fazla ise switch-case
