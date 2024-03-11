//*TODO VARIABLES

const selectInput = document.getElementById("selector");
const selectForm = document.getElementById("form-select");

let country = "";

window.addEventListener("load", () => {
  selectCountry();
});

//*TODO DATA IS PULLED FROM API AND CHANGED JSON
const selectCountry = async () => {
  try {
    const responsive = await fetch("https://restcountries.com/v3/all");
    console.log(responsive);

    //** Error Handing
    if (!responsive.ok) {
      errorFunction(`Someting went wrong ${responsive.status}`);
      throw new Error(`${responsive.status}`);
    }
    //** Date is made JSON
    const data = await responsive.json();

    //** Function is for adding counries names into selec options
    showCountryName(data);

  } catch (error) {
    const article = document.querySelector(".card");
    article.innerHTML = `
                <img src="./img/error.gif" alt="Error"/>
               `;
  }
};
//*TODO  ERROR THROWING
const errorFunction = (err) => {
  const errorCountries = document.getElementById(info - country);
  errorCountries.innerHTML = `
                <h3 class="text-denger">${err}</h3>
                <img src="./img/error.gif" alt="" />
            `;
};

//*TODO COUNTRIES NAMES ARE ADDED IN SELECT OPTIONS
const showCountryName = (country) => {
  countries = country;
  countries.forEach((item) => {
    const countrySelection = document.querySelector("#selector");
    countrySelection.innerHTML += `
                <option value="${item.name.common}">${item.name.common}</option>

        `;
  });
};

//*TODO COUNTRIES INFO ARE WROTE INTO CARD
selectInput.addEventListener("change", () => {
  const ulkeAdi = selectInput.value;

  if (ulkeAdi) {
    const secilenUlke = countries.filter(
      (ulke) => ulke.name.common === ulkeAdi
    );

    //* Selected country will be pull to DOM
    countryInfo(secilenUlke[0]);
    console.log(ulkeAdi);
  }
});

//*TODO THE FUNCTION IS FOR PULLING THE COUNTRY INFO TO DOM

const countryInfo = (country) => {
  console.log(country);
  const {
    name: { common },
    capital,
    region,
    flags,
    languages,
    currencies,
    population,
    borders,
    maps,
  } = country;

  console.log(maps.googleMaps);

  const listedCountry = document.getElementById("card-info");
console.log(flags[0]);

  listedCountry.innerHTML = `
        <img src="${flags[0]}" class="card-img-top shadow" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${common}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}</li>
          <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i>
          <span class="fw-bold"> Capitals:</span> ${capital}</li>
          <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>
          <span class="fw-bold"> Languages:</span> ${Object.values(
            languages
          )}</li>
          <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>
          <span class="fw-bold"> Currencies:</span> ${
            Object.values(currencies)[0].name
          },
          ${Object.values(currencies)[0].symbol}</li>
          <li class="list-group-item"> <i class="fa-solid fa-people-group"></i></i>
          <span class="fw-bold"> Population:</span> ${population.toLocaleString(
            "en-US"
          )}</li>
          <li class="list-group-item"> <li class="list-group-item">
          <i class="fa-sharp fa-solid fa-road-barrier"></i>
          <span class="fw-bold"> Borders:</span>  ${
            borders ? borders : "None"
          }</li>
        </ul>
        <div class="card-body">
        <span class="fw-bold"> Maps: </span><a href=${
          maps.googleMaps
        } class="card-link" target="_blank" > Go to selected country</a>
        </div>
        `;
};

selectCountry();
    //*TODO TO MAKE BACKGROUND IMAGE THE FLAGS
