
//*===================================
//*            VALIDATOR - CARDNO
//*===================================

        //*! TANIMLAMALAR
    //*INPUTS
    const inputCardDiv = document.querySelector(".card-no")
    const inputCard = document.querySelector("#card-no-validator")
    const inputCardTryDiv = document.querySelector(".tryagain-card")
    
        //*BUTTONS
    
    const buttonCard = document.querySelector(".card-no button")
    
    let infoCard = document.querySelector(".card-errors")
    
    buttonCard.addEventListener("click", (e) => {
    
        if (inputcard.value.trim() === ""){
            infoCard.textContent = "Card-No Required and must be 16 characters"
            inputCard.value = ""
            inputCard.focus()
        }
        else if (isNaN(inputCard.value)){
            infoCard.textContent = "must be number and 16 characters"
            inputCard.value = ""
            inputCard.focus()
        }
        else if(inputCard.value.slice().length < 9 || inputCard.value.slice().length >9){
            infoSsn.textContent = "must be 16 characters"
            inputCard.value = ""
            inputCard.focus()
        }
        else if(inputCard.value.slice(0) == inputCard.value.slice(1)  && inputCard.value.slice(0) == inputCard.value.slice(2) && inputCard.value.slice(0) == inputCard.value.slice(3)){
            infoCard.textContent = "The first part should not be 0000, 666"
            inputCard.value = ""
            inputCard.focus()
        }
        else{
            inputCardDiv.classList.add("d-none")
            infoCard.textContent = `${inputCard.value.slice(0, 4)}-${inputCard.value.slice(4, 8)}-${inputCard.value.slice(8-12)}-${inputCard.value.slice(12)} is a valid Card No`
    
            // inputSsnTryDiv.classList.remove("d-none")
            const tryButton = document.createElement("BUTTON")
            tryButton.className = "btn"
            const butonNode = document.createTextNode("Try Again")
            tryButton.appendChild(butonNode);
            inputCardTryDiv.appendChild(tryButton);
       
    
    
            tryButton.addEventListener("click", (e) => {
                inputCardDiv.classList.remove("d-none")
                inputCardDiv.classList.add("d-flex")
                tryButton.remove()
                inputCard.value = ""
                infoCard.textContent = ""
                inputCard.focus()
            })
        }

    })
    
    