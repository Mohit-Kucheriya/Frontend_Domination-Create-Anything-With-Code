// Developer Problem

// 1. Debugging a TypeError: Cannot read property 'X' of undefined
/*
When we try to access the object property value i.e it is not even present the we get the 'TypeError' to check if the value exist or not/handle the situation we use conditional chaining.
*/
var obj = {};
obj?.name?.first;

// 2. Handling Asynchronous Operations
const userBtn = document.querySelector("#userBtn")

function getNewUser() {
    fetch(`https://randomuser.me/api/`)
        .then((raw) => raw.json())
        .then((data) => {
            console.log(data.results[0]);
            let { name, email, gender, picture } = data.results[0];
            document.querySelector(
                "#parent"
            ).innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
            <div class="img w-20 h-20 rounded-xl bg-zinc-500 mb-3 overflow-hidden">
                <img class="w-full h-full fit-cover" src="${picture.large}" alt="">
            </div>
            <h3 class="font-semibold text-2xl">${name.first}</h3>
            <h5 class="text-md font-semibold opacity-60">${gender}</h5>
            <h6 class="text-sm opacity-40">${email}</h6>
            <p class="text-xs mt-3 opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                voluptates?
            </p>
        </div>`;
        });
}

userBtn.addEventListener("click", function () {
    getNewUser()
})

// 3. Working with localStorage
/*
localStorage ek ase space hai(memory) browser k pass jismein tum data store kardo toh data store hi rheta hai, aap chahe toh browser band kardo ya refresh kardo ya kuch bhi kardo data stored hi rhega, jab tak aap use khudse delete na krde

localStorage poore browser ka hota h ya website ka, waise localStorage hota toh browser ka part hai pr data stored yeh website k naam p krta hai
*/
