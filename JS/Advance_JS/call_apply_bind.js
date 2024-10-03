// call apply bind
// ye teen tarike hai function ko call karne ke kisi object ko 'this' maan kr

// Call
const callObj1 = {
    name: "Mohit Kucheriya",
};

function callObj(x, y = "kucheriya") {
    console.log(x, y);
    console.log(this);
}
callObj("Mohit"); // here is the window object
callObj.call(callObj1, 10, 20);

// Apply: here in apply we pass first argument the avtual onbject i.e applyOnj1 and the second argumet is the array
const applyObj1 = {
    fName: "Mohit",
    lName: "Kucheriya",
};

function applyObj(a, b) {
    console.log(this);
    console.log(a, b);

}

applyObj.apply(applyObj1, [1, 2, 3, 4])

// Bind
const bindObj1 = {
    fullName: "Mohit Santosh Kucheriya"
}
function bindObj() {
    console.log(this);
}

const baadMeiChlneWalaFunction = bindObj.bind(bindObj1);
baadMeiChlneWalaFunction()


