// Q1. Create a HTML page with a button. When a button is clicked, change the text of paragraph
/*
let btn = document.querySelector("button");
let p = document.querySelector("p")

btn.addEventListener("click",function(){
    p.textContent = "Full Stack Developer"

})
*/

// Q2. Create a page with two images  and a button. When a button is clicked, swap the source attribute of the images
/*
let btn = document.querySelector("button")
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")

btn.addEventListener("click", function () {
    let src1 = img1.src;
    let src2 = img2.src;

   img1.setAttribute("src",src2);
   img2.setAttribute("src",src1);

})
*/

// Q3. Create a form with input fields and a submit button. Use Javascript to validate the form and display an error message if the input is invalid.

// Note: When we deal with forms, when we submit them by default behaviour of forms is, they get reload and our JavaScript will ot work, So to handle the situation i.e. prevent the default behaviour of forms.

// let form = document.querySelector("form");
// let inp1 = document.querySelector("#inp1");
// let inp2 = document.querySelector("#inp2");
// let h3 = document.querySelector("#error");

/*
form.addEventListener("submit", function (e) {
    h3.textContent = "";

    e.preventDefault();

    if (inp1.value === "" || inp2.value === "") {
        h3.textContent = "Error: Some input fileds are blank";
        h3.style.color = "red";
    }
});
*/

/*
let form = document.querySelector("form");
let inputs = document.querySelectorAll('input[type="text"]');
let h3 = document.querySelector("#error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    for (let i = 0; i < inputs.length; i++) {
        h3.textContent = ""
        console.log(inputs[i]);
        if (inputs[i].value.trim() === '') {
            h3.textContent = "Error: Some inputs fields are blank";
            h3.style.color = "red";
            break;
        }
    }
});
*/

// Q4. Create an unordered list. Allow users to add and remove from the list dynamically using buttons
/*
let ul = document.querySelector("ul");
let inputField = document.querySelector("#inputField");
let addBtn = document.querySelector("#add");
let removeBtn = document.querySelector("#remove");
let h3 = document.querySelector("h3")
let li;

addBtn.addEventListener("click", function () {
    li = document.createElement("li");
    if (inputField.value.trim() === "") {
        h3.textContent = `Empty text field`;
        return;

    }
    else {
        h3.innerHTML = ""
        li.textContent = inputField.value.trim();
        ul.appendChild(li)
    }
    inputField.value = ""

})
 */

// Q5. Create a countdown timer that starts when a button is clicked and updates the display in real time.
/*
let h3 = document.querySelector("h3");
let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")
let interval;

startBtn.addEventListener("click", function () {
    let count = 0;
    interval = setInterval(() => {
        h3.textContent = count;
        count++;

    }, 1000);
})
stopBtn.addEventListener("click", function () {
    clearInterval(interval)
})
 */

// Q6. Create a tabbed interface where clicked on tabs displays different content without page reload
/*
let contentDiv = document.querySelectorAll(".content");
let p = document.querySelectorAll("p");

p[0].style.display = "block";

contentDiv.forEach(function (content, index) {
    content.addEventListener("click", function () {
        hideAllPara()
        p[index].style.display = "block"
    })
})

function hideAllPara() {
    p.forEach(function (p) {
        p.style.display = "none"
    })
}
*/

// Q7. Display a progress bar that updates in real-time, showing the progress of a task, download, or submission form
/*
let progressBar = document.querySelector("#progressBar");

let count = 0;
let clearProgress = setInterval(() => {
    if (count == 100) {
        document.querySelector("h3").style.opacity = 1
        clearInterval(clearProgress)
    }
    count++
    progressBar.style.width = count + "%"
}, 100);
*/

// IMPORTANT CONCEPT
// Q8. Create a search bar that display the live search results as users type, updating the results without requiring a full page reload
/*
let input = document.querySelector("input")

let data = [
    { name: "Bella throne", src: "https://wallpaper.forfun.com/fetch/2e/2ef1b65fd63b339aa300e4257dac6c2a.jpeg" },
    { name: "Lana Del Rey", src: "https://wallpaper.forfun.com/fetch/5c/5c1230a88a595198b747ab76c8705c57.jpeg" },
    { name: "Madison Beer", src: "https://wallpaper.forfun.com/fetch/89/8958260cd401610fa05a45c2c1b49f1a.jpeg" },
    { name: "Selena Gomez", src: "https://wallpaper.forfun.com/fetch/34/348cc29f0afc20f5ece40110363cc5a0.jpeg" },
    { name: "Dua Lipa", src: "https://wallpaper.forfun.com/fetch/d1/d15fb3a35d8fd1d6fd5f6216b5dfa8ae.jpeg" },
    { name: "Ana de armas", src: "https://wallpaper.forfun.com/fetch/32/32c1b0cc99837c7bc06eb84d3839a080.jpeg" },
    { name: "Emilia Clarke", src: "https://wallpaper.forfun.com/fetch/6b/6ba8f938190b16a5b8f44105ad928171.jpeg" },
    { name: "Dakota Johnson", src: "https://wallpaper.forfun.com/fetch/a7/a77971b99ac591c0685a6789c8e16ec7.jpeg" },
]

let pers = ""

data.forEach(function (elem) {
    pers += ` <div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
            </div>`

})

document.querySelector(".people").innerHTML = pers

input.addEventListener("input", function () {
    let matching = data.filter(function (e) {
        return e.name.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase())
    })
    console.log(matching);
    let newUser = ""

    matching.forEach(function (elem) {
        newUser += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`

    })

    document.querySelector(".people").innerHTML = newUser
})
*/

// Q9. Build a character counter for textarea or input filed, which updates in real-time as user types and enforces a character limit.
/*
let textarea = document.querySelector("textarea");
let counter = document.querySelector("#counter");

textarea.addEventListener("input", function () {
    counter.textContent = textarea.value.length;
});
*/

let progressBarScroll = document.querySelector("#progressBarScroll");

window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    progressBarScroll.style.width = scrollPercentage + "%"
}
