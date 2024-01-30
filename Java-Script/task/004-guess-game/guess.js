
                    //?**************  GUESS GAME  **************/




// while (userSayi < 0 || userSayi > 100) {
//         console.log("You must guess beteen 1 and 100");
//         userSayi = prompt("Guess number that computer choose")

// }
// while(pcSayi > userSayi) {
//     console.log("daha büyük");
//     userSayi = prompt("Guess number that computer choose")
// }
// while(pcSayi < userSayi){
//     console.log("daha küçük");
//     userSayi = prompt("Guess number that computer choose")
// }

// console.log("kkkkk");

// while(userSayi > pcSayi){
//     console.log("You must guess lower number");
//     userSayi = prompt("Guess number that computer choose")
// }

// while(userSayi < pcSayi){
//     console.log("You must guess bigger number");
//     userSayi = prompt("Guess number that computer choose")
// }


// let pcSayi = Math.floor(Math.random() * 101)

// console.log(pcSayi);

// let userSayi = prompt("Guess number that computer choose")
// let i = 5


while (i > 0){
    if(userSayi < 0 || userSayi > 100){
        alert(`You must guess beteen 1 and 100. Remaining healt: ${i}`);
        userSayi = prompt("Guess number that computer choose ")
    }
    else if(userSayi < pcSayi){
        alert(`You must guess bigger number. Remaining healt: ${i}`);
        userSayi = prompt("Guess number that computer choose")
    }
    else if(userSayi > pcSayi){
        alert(`You must guess lower number. Remaining healt: ${i}`);
        userSayi = prompt("Guess number that computer choose")
    }
    else{
        alert("Cangratulate! You are right...");
    }

    i--
}

alert("Game Over")
