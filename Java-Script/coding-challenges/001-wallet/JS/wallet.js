//* Variables

//* GİDER
const date = document.querySelector("#tarih");
const harMiktar = document.getElementById("harcama-miktar");
const harAlan = document.querySelector("#harcama-alani");
const harcamaBtn = document.querySelector(".har-kydet-btn");
const harcamaForm = document.getElementById("harcama-form")

//* GELİR
const gelirMiktar = document.querySelector(".gelir-input");
const gelirEkleBtn = document.querySelector(".gelir-btn");
const gelirForm = document.getElementById("gelir-form")

//* TABLO
const table = document.getElementById("harcama-tablo");

//* DELETE
const clearBtn = document.querySelector(".clear-btn");

//* RESULT
let gelirler = 0;
let harcamaList = []
const calGelir = document.querySelector(".cal-gelir");
const calGider = document.querySelector(".cal-gider");
const calKalan = document.querySelector(".cal-kalan");

//***************************************************** */


window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    calGelir.textContent = gelirler
} )


gelirForm.addEventListener("submit", (e) => {

        e.preventDefault()        
        gelirler = gelirler + Number(gelirMiktar.value)
        gelirForm.reset()
        localStorage.setItem("gelirler", gelirler)
        calGelir.textContent = gelirler

console.log(gelirler);

});


//** GİDER */

harcamaForm.addEventListener("submit", (e) => {
    e.preventDefault() 
    const yeniHarcama = {
        tarih: date.value,
        alan: harAlan.value,
        miktar: harMiktar.value,
        id: new Date().getTime()
    }
    harcamaList.push(yeniHarcama)
    console.log(harcamaList);
    localStorage.setItem("harcamalar", JSON.stringify(harcamaList))

    harcamaForm.reset()
    date.valueAsDate = new Date()
})