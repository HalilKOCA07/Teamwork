
// // //*TODO VARIABLES

const selectInput = document.getElementById("selector")

const selectCountry = async () => {
    
    try{
        const responsive = await fetch("https://restcountries.com/v3/all")
        console.log(responsive);
        //*TODO Error Handing
        if(!responsive.ok){
            throw new Error (`${responsive.status}`)
        }
        const data = await responsive.json()
                        //** FUNCTION WILL BE CALLING
        showCountryInfo(data)
        console.log(data);
    }catch (error){
            const article = document.querySelector(".card")
            article.innerHTML = `
                <img src="./img/error.gif" alt="Error"/>
            `
    }
}

const showCountryInfo = (country) => {
    const countrySelection = document.querySelector("#selector")

    country.forEach((item) => {
        countrySelection.innerHTML += `
                <option>${item.name.common}</option>
        `
    });
}



selectCountry()
