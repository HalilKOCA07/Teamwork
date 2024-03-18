
//*TODO VARIABLES

const cardDiv = document.querySelector(".card")

//*sayfa ik açıldığında
window.addEventListener("load", () => {
    getUsers()
})

const getUsers = async () => {

    try{
        const responsive = await fetch("https://randomuser.me/api/")
        console.log(responsive);

        //* Throwing Error
        if(!responsive.ok){
            throw new Error(`Something went wrong ${responsive.status}`);
        }

        const dataUsers = await responsive.json()

        console.log(dataUsers.results);
        showUsers(dataUsers.results)
    }catch(error){
        cardDiv.innerHTML = `
                <h5>Something went wrong</h5>
        `
    }
}

const showUsers = (user) => {
    const defaultImage = "./img/error.gif"
    const container = document.querySelector(".container")
    const btn = document.querySelector("button")

    user.forEach(({picture, name, email, phone, gender}) => {

        if(gender == "male"){
            container.classList.add("male")
            btn.classList.add("btn-male")
        }else{
            container.classList.add("female")
            cardDiv.classList.add("female-color")
            btn.classList.add("btn-female")
        }

        cardDiv.innerHTML = `
        <img src="${picture.large || defaultImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${name.first}</h5>
        <p>${email}</p>
        <p>${phone}</p>
        <a href="${email}" class="btn btn-primary">Send Message</a>
        `
    });
}


const btn = document.querySelector("button")
btn.addEventListener("click", () => location.reload());
