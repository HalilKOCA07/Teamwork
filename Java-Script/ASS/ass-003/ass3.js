const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");
const getBtnDiv = document.getElementById("get-btn");






const getCats = async () => {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    console.log(res);
    //Error Handing
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    showCats(data); //function calling
  } catch (error) {
    cardDiv.innerHTML = `<img src="./img/error.gif" alt="" />`;
  }
};

const showCats = (cat) => {
  const defaultImage = "./img/error.gif";

  cat.forEach(({ url }) => {
    cardDiv.innerHTML += `
    <div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
          <img src="${url || defaultImage}" class="" alt="...">
      </div>
    </div>
    `;
  });
};

setTimeout(() => {

  setInterval(() => {
    let now = new Date()
    let formatTarih = now.toLocaleDateString()
    let formatTime = now.toLocaleString()
    tarih.textContent = `${formatTime}`
  }, 1000)

  
  loadingDiv.remove();

  const btn = document.createElement("buton");
  btn.classList.add("btn", "btn-danger", "mt-5");
  btn.textContent = "Get New Cats";
  getBtnDiv.appendChild(btn);

  btn.addEventListener("click", () => location.reload());

  getCats();
}, 3000);
