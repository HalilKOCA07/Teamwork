console.log("*****Conditions******");
//* yaş hesaplam arrow

const ageCalulation = (year) => new Date().getFullYear() - year;

                          //! NAME and LASTNAME

const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");

                            //! AGE

let year = +prompt("What is your birth year?");
// let exit = false; //* Flag mechanism
let age = "" 
while (year < 1950 || year > new Date().getFullYear() || year === NaN) {

  if (year < new Date().getFullYear() && year > 1950){
    exit = true;
    break;
  }

  alert("Geçerli bir yil giriniz (1950 < birth year must be < this year )");
  year = +prompt("Plese! Enter your birth year again OR enter 'Q' for exit");

  // if (year === "q") {
  //   exit = true;
  //   break;
  // }
}

age = ageCalulation(year); //* yaş hesaplama fonksiyonu çağrıldı

                            //! MILITARY

let militaryService = prompt("Did you complate your military service? (yer or no)").toLowerCase();
// let exit = false; //* Flag mechanism
while (
  militaryService !== "yes" ||
  militaryService !== "no"
) {

  if(militaryService === "yes" || militaryService === "no"){
    exit = true ;
    break;
  }
  alert("Please! Enter 'yes' or 'no'");
  militaryService = prompt("Please! Enter your military servise statement again.  (yer or no)");
}

                              //! GENDER

let gender = prompt("What is your gender? (male or female)").toLowerCase();

while (gender.toLowerCase() !== "male" || gender.toLowerCase() !== "female"){

      if (gender === "male" || gender === "female"){
        exit = true;
        break;
      }
      alert("Please! Enter 'male' or 'female'");
  gender = prompt("Please! Enter your gender again.  (male or female)");
}

                              //! HEALTY

let healty = prompt("Do you have any healty problems? (yes or no)");

while (healty.toLowerCase() !== "yes" || healty.toLowerCase() !== "no") 
{
  if(healty === "yes" || healty === "no"){
    exit = true;
    break;
  }
            alert("Please! Enter 'yes' or 'no'");
  healty = prompt("Please! Enter your healty condition again.  (yes or no)");
}

                          //!EXPERIENCE

let experienceYear = +prompt("What is your experience year?");
while (experienceYear < 1 || experienceYear > 50 || experienceYear === NaN) {
    if(experienceYear === Number ){
      exit = true;
      break;
    }
  alert("Please! Enter 'yes' or 'no'");
  experienceYear = prompt("Please! Enter your experience year again.");
}

                        //! KNOWLEDGE JS

let knownToolJs = prompt("Do you Know Java Script? (yes or no)");
while (
  knownToolJs.toLowerCase() !== "yes" ||
  knownToolJs.toLowerCase() !== "no"
) {
  if(knownToolJs === "yes" || knownToolJs === "no"){
    exit = true;
    break;
  }
  alert("Please! Enter 'yes' or 'no'");
  knownToolJs = prompt("Please! Enter your Java Script knowledge statement again.  (yes or no)");
}

                        //! KNOWLEDGE HTML

let knownToolHtml = prompt("Do you Know HTML? (yes or no)");
while (
  knownToolHtml.toLowerCase() !== "yes" ||
  knownToolHtml.toLowerCase() !== "no"
) {
  if(knownToolHtml === "yes" || knownToolHtml === "no"){
    exit = true;
    break;
  }
  alert("Please! Enter 'yes' or 'no'");
  knownToolHtml = prompt("Please! Enter your HTML knowledge statement again.  (yes or no)");
}

                        //! KNOWLEDGE CSS

let knownToolCss = prompt("Do you Know CSS? (yes or no)");
while (
  knownToolCss.toLowerCase() !== "yes" ||
  knownToolCss.toLowerCase() !== "no"
) {
  if(knownToolCss === "yes" || knownToolCss === "no"){
    exit = true;
    break;
  }
  
  alert("Please! Enter 'yes' or 'no'");
  knownToolCss= prompt("Please! Enter your CSS knowledge statement again.  (yes or no)");
}

let kosul1 =
  age >= 20 && age <= 45 &&
  militaryService.toLowerCase() === "yes" &&
  healty === "no" &&
  experienceYear >= 3;
let kosul2 =
  knownToolJs === "yes" || knownToolHtml === "yes" || knownToolCss === "yes";

let available = (`${firstName} ${lastName} is available for interview.`)
let congrate = "CONGRATULATIONS"
let notAvailable = (`${firstName} ${lastName} is not available for interview.`)
let sorry = "I AM SORRY"
let result = ""
let result2 = ""
let problemAge = ""
let problemMilitary = ""
let problemHealty = ""
let problemExperience = ""
let problemKnowledge = ""


if (kosul1 && kosul2) {
    result = available
    result2 = congrate
} else {
    result = notAvailable
    result2 = sorry
    problemAge = "Sorry! Your age must be betweem 20 and 45"
    problemMilitary = "Sorry! You must have done military sevice"
    problemHealty = "Sorry! Your health condition is not suitable"
    problemExperience = "Sorry! Your experience must be more then 3 year"
    problemKnowledge = "Sorry! you must know at lest one of the tools (JS, HTML, CSS)"
}

  document.getElementById("firstname").innerHTML = firstName;
  document.getElementById("lastname").innerHTML = lastName;
  document.getElementById("age").innerHTML = age;
  document.getElementById("military").innerHTML = militaryService;
  document.getElementById("gender").innerHTML = gender;
  document.getElementById("healty").innerHTML = healty;
  document.getElementById("experience").innerHTML = experienceYear;
  document.getElementById("know-js").innerHTML = knownToolJs;
  document.getElementById("know-html").innerHTML = knownToolHtml;
  document.getElementById("know-css").innerHTML = knownToolCss;
  document.getElementById("result").innerHTML = result2;
  document.getElementById("result2").innerHTML = result;
  document.getElementById("problemage").innerHTML = problemAge;
  document.getElementById("problemmilitary").innerHTML = problemMilitary;
  document.getElementById("problemhealty").innerHTML = problemHealty;
  document.getElementById("problemexperience").innerHTML = problemExperience;
  document.getElementById("problemknow").innerHTML = problemKnowledge;

