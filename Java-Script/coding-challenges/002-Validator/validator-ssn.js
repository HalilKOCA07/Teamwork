
//*===================================
//*            VALIDATOR-SSN
//*===================================

        //*! TANIMLAMALAR
    //*INPUTS
const inputSsn = document.querySelector("#ssn-validator")
const inputSsnDiv = document.querySelector(".ssn")
const inputSsnTryDiv = document.querySelector(".tryagain-ssn")

    //*BUTTONS

const buttonSsn = document.querySelector(".ssn button")

let infoSsn = document.querySelector(".ssn-errors")

buttonSsn.addEventListener("click", (e) =>{

    if (inputSsn.value.trim() === ""){
        infoSsn.textContent = "ssn Required and must be 9 characters"
        inputSsn.value = ""
        inputSsn.focus()
    }
    else if (isNaN(inputSsn.value)){
        infoSsn.textContent = "must be number and 9 characters"
        console.log(typeof inputSsn);
        inputSsn.value = ""
        inputSsn.focus()
    }
    else if(inputSsn.value.slice().length < 9 || inputSsn.value.slice().length >9){
        infoSsn.textContent = "must be 9 characters"
        inputSsn.value = ""
        inputSsn.focus()
    }
    else if(inputSsn.value.slice(0,1) === inputSsn.value.slice(1,2)  && inputSsn.value.slice(0,1) === inputSsn.value.slice(2,3)){
        infoSsn.textContent = "The first part should not be same number"
        inputSsn.value = ""
        inputSsn.focus()
    }
    else{
        inputSsnDiv.classList.add("d-none")
        infoSsn.textContent = `${inputSsn.value.slice(0, 3)}-${inputSsn.value.slice(3, 5)}-${inputSsn.value.slice(5)} is a valid SSN`

        // inputSsnTryDiv.classList.remove("d-none")
        const tryButton = document.createElement("BUTTON")
        tryButton.className = "btn"
        const butonNode = document.createTextNode("Try Again")
        tryButton.appendChild(butonNode);
        inputSsnTryDiv.appendChild(tryButton);
   


        tryButton.addEventListener("click", (e) => {
            inputSsnDiv.classList.remove("d-none")
            inputSsnDiv.classList.add("d-flex")
            tryButton.remove()
            inputSsn.value = ""
            infoSsn.textContent = ""
            inputSsn.focus()
        })
    }

    console.log(typeof inputSsn.value);
    console.log(inputSsn.value.slice(0,3));
})

