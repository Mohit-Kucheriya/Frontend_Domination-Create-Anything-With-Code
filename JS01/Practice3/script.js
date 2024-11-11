// when destructuring objects in JavaScript, the variable names must match the property names (keys) of the object.
let obj = {
    name: "Mohit",
    socials: {
        facebook: {
            first: "Harry",
            second: "Ron"

        }
    }
}

const { second } = obj.socials.facebook;
console.log(second);

let arr = [10, function () { }, "Ruchita"]

let [first, , third] = arr;
console.log(first);
console.log(third);

// Fat arrow function
/*
Note: Remember when we want to return an object, try to write it in the following way:
*/

const newFun = () => ({ name: "Mohit", age: 25 })
console.log(newFun());

// Map 
let arr1 = [1, 2, 3, 4, 5]
let answer = arr1.map(num => num * 2.5)
console.log(answer);

let state = [11, 5, 3, 4, 2, 10, 45, 56, 564]
let changeState = state.map(elem => elem > 5 ? elem + 5 : elem)
console.log(changeState);


