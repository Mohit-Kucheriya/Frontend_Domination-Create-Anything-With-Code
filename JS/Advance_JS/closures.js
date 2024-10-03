// Closures
// ek function jo return kare doosra function, aur use kare parent function ka variable

function closureFunction() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let answer = closureFunction();
answer();
answer();
answer();

// Event delegation
// Jab aap event listener s kai saare different elements ke events handle kr skte ho.
// event listener ko parent par lagao and unko id, class ya fir tag ke basis pr differentiate karke task karo

let parent = document.querySelector("#parent");
parent.addEventListener("click", function (dets) {
    if (dets.target.id === "play") {
        console.log("Play Song");
    } else if (dets.target.id === "pause") {
        console.log("Song Paused");
    }
});

// Higher Order Function
// Aisa koi function jo ki function ko parameter mein accept karle and/or ek function ko return karde

function abcd(param) {
    param();
    return function () {
        console.log("Returning a fuction from the higher order function");
    };
}

const higherOrderFunction = abcd(function () {
    console.log("Higher order function");
});

higherOrderFunction();

// Error Handling using try-catch
function divideFun(a, b) {
    try {
        if (b == 0) {
            throw Error("Sorry denominator can't be Zero");
        } else if (b < 0) {
            throw Error("Negative denominator is not allowed");
        } else {
            console.log(a / b);
        }
    } catch (error) {
        console.error(error);
    }
}

divideFun(10, 10);

// Custom Event
/* Steps: 1. make event 
2. attach event to some DOM element.
3. dispatch that event from that DOM element in which you attached the event.
*/

const customEvent = new Event("newEvent")

document.querySelector("button").addEventListener("newEvent", function () {
    alert("Custom Event Occured")
})

document.querySelector("button").dispatchEvent(customEvent)