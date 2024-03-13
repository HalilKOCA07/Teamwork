
const allProducts = document.getElementById("pills-all")
const containerProducts = document.getElementById("pills-tabContent")

 export const getProducts = async () => {
    try{
        const responsive = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
        console.log(responsive);

        //Error Handing
        if(!responsive.ok){
            throw new Error(`${responsive.status}`);
        }
        const dataProducts = await responsive.json()
        console.log(dataProducts);
        //function gelecek
    }catch (error) {
        containerProducts.innerHTML = `<img src="https://www.alastyr.com/blog/wp-content/uploads/2020/11/windows-hatasi.jpg" alt="" />`
    }
}

const showProducts = (product) => {
    const defaultImage = "https://www.alastyr.com/blog/wp-content/uploads/2020/11/windows-hatasi.jpg"


}

export const app = () => console.log("hi");
getProducts()