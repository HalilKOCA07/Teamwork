
//*TODO VARIABLES

    const flagCountry = document.getElementById("flag-country-image")


const countriesInfo = async () => {
    try{
        const res = await fetch("https://restcountries.com/v3/all")
        console.log(res);
        // console.log(res.name.common);

        //Error Handing
        if(!res.ok){
            throw new Error (`${res.status}`)
        }
        const data = await res.json()
        console.log(data);
        //Fonksiyon hazırlanacak ekleyeceğim
    }catch (error) {
        // const flagCountry = document.getElementById("flag-country-image")
        // flagCountry.setAttribute("src", "./");
        // console.log(`Hata ${res.status}`);
    }
}

countriesInfo()