

const allProducts = document.querySelector("#v-pills-all");
const motorProduct = document.getElementById("pills-motor")
const containerProducts = document.getElementById("pills-tabContent");
const productBox = document.querySelector(".product-box");
const detailBtn = document.querySelector(".btn-detail");
const addBtn = document.getElementById("add-card-btn");

let btnDOM = [];
let cart = [];

window.addEventListener("load", () => {
  getProducts()
})

export const getProducts = async () => {
  try {
    const responsive = await fetch(
      "https://anthonyfs.pythonanywhere.com/api/products/"
    );
    console.log(responsive);

    //Error Handing
    if (!responsive.ok) {
      throw new Error(`${responsive.status}`);
    }
    const dataProducts = await responsive.json();
    console.log(dataProducts);
    //function gelecek
    showProducts(dataProducts);
  } catch (error) {
    containerProducts.innerHTML = `<img src="https://www.alastyr.com/blog/wp-content/uploads/2020/11/windows-hatasi.jpg" alt="" />`;
  }
};

const showProducts = (product) => {
  const defaultImage =
    "https://www.alastyr.com/blog/wp-content/uploads/2020/11/windows-hatasi.jpg";

 product.forEach(({ image, description, title, price, id }) => {
    allProducts.innerHTML += `
        <div id="${id}" class="product-box d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 card" style="width: 18rem;">
        <img src="${image || defaultImage}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <p class="card-price"><span>Fiyat:</span> ${price}</p>
        <button id="add-card-btn">Add to cart</button>

        <button type="button" id="${id}" class="btn btn-primary btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button>
        </div>
        </div>
        `;
  });
};

const getButtons = () => {
  const buttons = [...document.querySelectorAll(".add-card-btn")];
  btnDOM = buttons;

  buttons.forEach((button) => {
    let id = button.id;
    let inCart = cart.find((item) => item.id === id);
    if (inCart) {
      button.setAttribute("disabled", "disabled");
      button.style.opacity = ".3";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getButtons();
});
