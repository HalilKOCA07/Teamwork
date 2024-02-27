//***********************************/
//*        CHECKOUT APP
//***********************************/


//* Selectors
const deleteBtn = document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector("article.products");

const FREE_SHIPPING_LIMIT = 3000
const SHIPPING_PRICE = 59.99
const TAX_RATE = 0.20



//* EVENT HANDLERS

deleteBtn.addEventListener("click", (e) => {
    products.textContent = "No Products"
    products.classList.add("no-product")
    deleteBtn.remove()
    allProductsPrice()
})

products.addEventListener("click", (e) =>{

    //*ürün adetini arttırınca
    if (e.target.classList.contains("fa-plus")){  

        if(e.target.previousElementSibling.textContent < 5){
            e.target.previousElementSibling.textContent++
        }
    calculateProductPrice(e.target) //* hesaplama fonksiyonu kullandım
    }

    //*ürün adetini düşürünce
    else if(e.target.classList.contains("fa-minus")){
        
        if(e.target.nextElementSibling.textContent > 1){
            e.target.nextElementSibling.textContent--
        }
        calculateProductPrice(e.target)
    }

    //*ürün silinince
    else if (e.target.classList.contains("fa-trash-can")){
        e.target.closest(".product").remove()
        console.log(e.target.closest(".product"));        
        calculateProductPrice(e.target)

        
        const prices = document.querySelectorAll("#product-price")
        const total = [...prices]
        if(total == 0){
          products.textContent = "No product"
          products.classList.add("no-product")
        }
    }
} )

//*bir ürünün hesaplama fonksiyonu
const calculateProductPrice =  (btn) => {
    //*ürün fiyatı
    const ProductPrice = btn.closest(".product-info").querySelector("#discounted-price")

    //*ürün toplam fiyatı
    const productTotalPrice = btn.closest(".buttons-div").querySelector("#product-price")

    //*ürün adeti
    const quantity = btn.parentNode.querySelector("#quantity")

    //*hesaplama
    productTotalPrice.textContent = (ProductPrice.textContent * quantity.textContent).toFixed(2)

    allProductsPrice()
}


//* sepet toplam tutar / shipping / KDV hesaplama...

const allProductsPrice = () => {
    //
    const allprices = document.querySelectorAll("#product-price")
    const allTotal = [...allprices].reduce((sum, prices) => sum + Number(prices.textContent),0)

    const shippingPrice = allTotal >= FREE_SHIPPING_LIMIT || allTotal === 0 ? 0.0 : SHIPPING_PRICE

    const taxPrice = allTotal * TAX_RATE

    const sum = allTotal + shippingPrice + taxPrice


    const selectedPrice = document.querySelector("#selected-price")
    selectedPrice.textContent = allTotal.toFixed(2)
    document.querySelector("#shipping").textContent = shippingPrice.toFixed(2)
    document.querySelector("#tax").textContent = taxPrice.toFixed(2)
    document.querySelector("#total").textContent = sum.toFixed(2)
}

window.addEventListener("load", () => {
    allProductsPrice()
})

