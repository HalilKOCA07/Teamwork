const shoppingBoxAmount = document.querySelector(".badge")
const shoppingTotalPrice = document.querySelector(".total-value")

export const saveCartValues = ((cart) => {
    let totalPrice = 0;
    let totalAmount = 0;

    cart.map((item) => {
        totalPrice += item.price * totalAmount;
        totalAmount += item.amount;
    })
    shoppingBoxAmount.innerHTML = totalAmount
    shoppingTotalPrice.innerHTML = parseFloat(totalPrice.toFixed(0))
})


