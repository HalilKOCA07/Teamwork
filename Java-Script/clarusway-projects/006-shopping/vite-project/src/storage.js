

export const setProduct = ((products) => {
    localStorage.setItem("products", JSON.stringify(products))
})

export const getProduct = ((id) => {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((products) => products.id === id)
})

export const setCart = ((cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
})