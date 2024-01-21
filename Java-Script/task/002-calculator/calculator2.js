let num1 = +(prompt("Enter First Number:"))
let opr = (prompt("Enter Operator ('+' '-' '*' '/' '%'):"))
let num2 = +(prompt("Enter Second Number:"))

if (opr == "+"){
    alert(num1 + num2)
}
else if (opr == "-"){
    alert(num1 - num2);
}
else if (opr == "*"){
    alert(num1 * num2);
}
else if (opr == "/"){
    alert(num1 / num2);
}
else if (opr == "%"){
    alert((num1 / 100) * num2);
}
else{
    alert("Entered type is invlid");
}


