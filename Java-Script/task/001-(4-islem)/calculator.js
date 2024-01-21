function insert(num){
document.form1.numberview.value = document.form1.numberview.value + num;
}

function equaly(){
let exp = document.form1.numberview.value;
if (exp){
document.form1.numberview.value = eval(exp)
}
}

function backspace(){
let exp =  document.form1.numberview.value;
document.form1.numberview.value = exp.substring(0, exp.lenght - 1);
}
