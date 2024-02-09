
// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

// const adet = students.find("ahmet");
// console.log(adet);


let enterStudent = prompt("Enter the name you are looking for")
const studentsOfClarusWay =["Halil", "Aybuke", "Cemil", "Selman", "Taha", "Sercan", "Ferit", "Tugba", "Mehmet", "Celal", "Sefa", "Ahmet", "Baki", "Onur", "Fatih", "Berat", "Halil"];

let student = enterStudent[0].toUpperCase() + enterStudent.slice(1);

let adet = 0;
let result = ""

for (let i = 0; i < studentsOfClarusWay.length; i++){
    if (studentsOfClarusWay[i] === student){
        adet++
    }
}

if (adet === 0){
    result = `${student} can not be found`
}
else if(adet > 1){
    result = `There are ${adet} ${student} `
}

else{
    result = `There is ${student}`
}

document.getElementById("test").innerHTML = result;