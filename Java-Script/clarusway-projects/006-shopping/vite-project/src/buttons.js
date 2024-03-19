import { getProduct } from "./storage";
import { setCart } from "./storage";
import { saveCartValues } from  "./shopping-box"

let buttonsDom = [];
let cart = [];

export const getAllButtons = (() => {
    const buttons = [...document.querySelectorAll(".add-btn")];
    buttonsDom = buttons;


    buttons.forEach(button => {
        let id = button.id;
        let incart = cart.find(item => item.id === id)

        if(incart){
            button.setAttribute("disabled", "disabled");
            button.style.opacity = ".3";
        }else{
            button.addEventListener("click", (event) => {
                console.log(event.target.id);
                event.target.disabled = true;
                event.target.style.opacity = ".3";

                // Local storage teki product'ten product alınacak
                let cartItem = { ...getProduct(id), amount: 1};  
                console.log(cartItem);

                //add the product to cart
                cart = [...cart, cartItem];  //? cart += cartItem;  => calışmadı demekki mantık farklı
                console.log(cart);

                // add the cart to localStorage
                setCart(cart);

                // add cart values
                saveCartValues(cart)


            })
        }

    })
})

