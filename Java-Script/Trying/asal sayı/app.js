// const sayi = parseInt(prompt('Bir Sayı Giriniz:'));
// let asal = true
// const asalNumber = []

// for (let i = 3; i <= 100 ; i++) {
//     for (let k = 2; k <= i / 2; k++){

//     if (i % k >= 0) {
//         asal = false;
//         break;
//    }
//    asalNumber.push(i)
//   }

// }


// console.log(asalNumber);


// const sayi = parseInt(prompt('Bir Sayı Giriniz:'));
// var asal = true;

// for(let sayi = 3; sayi <= 100; sayi++){
// for (var i = 2; i <= sayi / 2; i++) {
//     if (sayi % i == 0) {
//         asal = false;
//         asalNumber.push(i)
//     }
    
// }
// }
   
// if (asal) {
//     console.log(sayi + ' sayısı asaldır.');
// } else {
//     console.log(sayi + ' sayısı asal değildir.');
// }
// console.log(asalNumber);

const asalNumber = []

for(let sayi = 2; sayi < 100; sayi++)
{
  for (var bolum = 2; bolum < sayi; bolum++)
    {
      if(sayi % bolum === 0)
          break;
    }
	if (sayi === bolum)

    asalNumber.push(sayi)
  
}

console.log(asalNumber);