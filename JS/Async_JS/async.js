// Yeh sabhi use hi tab kiye jaate hai jab aapko kuch aisa krna ho jismein time lagega.

// setTimeout: setTimeout ka code kuch der badd chlta hai.
console.log("Hey1");
console.log("Hey2");
setTimeout(function () {
    console.log("Hey3");
}, 2000);
console.log("Hey4");

// setInterval: setInterval la code kuchh der baad chlata hai baar baar ek particular interval time mein.
let count = 0;
let closeInterval = setInterval(() => {
    count++;
    if (count === 3) clearInterval(closeInterval);
    console.log(count);
}, 1000);

// Fetch API: yr kisi aur URL par jaa kar kuchh data laayega ya data humare pass se us URL par lekar jaayega.
// kyuki ye internet par jayega aur fir data ko lekar aaye to isme time lagta hai to by default hi JS mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi URL se ab asia ho skta hai us URL ki website slow ho, to data lane mein time lage aur agar feth synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which is a big problem, poora code atak sakta tha

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => data.json())
    .then((res) => console.log(res[0].name));

// Axois (or other HTTP libraries): ye bhi wahi karega jo fetch karta hai bas ye thoda developer friendly ha.
axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((result) => result.data)
    .then((response) =>
        response.forEach((element) => {
            console.log(element.email);
        })
    );

// promise: ye janaab ke andar jo code likhoge wo apan kaam karega aur ye khud side stack main chale jaayega us code ko lekar aur jab andar se code resolve kiya jaayega tab ye chalenge

const promise1 = new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((raw) => raw.json())
        .then((data) => {
            if (data[1].name === "Leanne Graham") {
                resolve("Named Found Successfully");
            } else {
                reject("Promise Rejected");
            }
        });
});

promise1
    .then(function (data) {
        console.log(`${data}: Green`);
    })
    .catch(function (e) {
        console.log(`${e}: Red`);
    });
