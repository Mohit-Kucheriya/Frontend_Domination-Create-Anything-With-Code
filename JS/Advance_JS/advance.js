// this call apply bind
/*
global: window 
function: window
method: object 
function inside method (es5): window
function inside method (es6): object 
constructor function mein this ki value: new blank object 
event listener mein this ki value: that element jis par event listener laga ho
*/

// 1. global: window
console.log(this);

// 2. function: window
function abcd() {
    console.log(this);
}
abcd();

// 3. method: object
var obj = {
    age: 23,
    name: function () {
        console.log(this);
        return "In method 'this' is the that object only here is 'obj' ";
    },
};

console.log(obj.name());

// 4. function inside method (es5): window
var obj2 = {
    method: function () {
        console.log(this); // here 'this' is the actual obj2 object.
        function insidees5() {
            console.log(`function inside function method(es5)`, this); // here 'this' is the window object.
        }
        insidees5();
    },
    firstName: "Mohit",
    lastName: "Kucheriya",
};
obj2.method();

// 5. function inside method (es6): object
// here in both case 'this' refers to that object only i.e is 'obj3'

var obj3 = {
    parentMethod: function () {
        console.log(this);
        const childMethod = () => {
            console.log(this.isLoggedIn);
        };
        childMethod();
    },
    isLoggedIn: true,
    numbOfActiveDays: ["Monday", "Tuesday"],
};

obj3.parentMethod();

var obj4 = {
    sayHello: () => {
        console.log(this); // here 'this' value refers to its parent 'this'. So here obj4 is in the global scope i.e. is here this in obj4.sayHello() is the window object
    },
};
obj4.sayHello();

// 6. constructor function mein this ki value: new blank object
function newConstructor() {
    let x = 1;
    console.log(this);
}

const answer = new newConstructor();

// 7. event listener mein this ki value: that element jis par event listener laga ho
document.querySelector("button").addEventListener("click", function () {
    console.log(this); // here 'this' is the button element himself
});
