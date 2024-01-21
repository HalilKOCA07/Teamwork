let num1 = +(prompt("Enter First Number:"))
let opr = (prompt("Enter Operator ('+' '-' '*' '/' '%'):"))
let num2 = +(prompt("Enter Second Number:"))
10
if (opr == "+"){
    console.log(num1 + num2)
}
else if (opr == "-"){
    console.log(num1 - num2);
}
else if (opr == "*"){
    console.log(num1 * num2);
}
else if (opr == "/"){
    console.log(num1 / num2);
}
else if (opr == "%"){
    console.log((num1 / 100) * num2);
}
else{
    console.log("Entered type is invlid");
}

