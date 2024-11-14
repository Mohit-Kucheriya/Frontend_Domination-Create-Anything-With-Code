1. state ek data hota hai, react is data ka khayaal rakhta hai, jab bhi yeh data change hota hai react page ko update krta hai.

2. state koi bhi data ho skta hai, score = 0

3. maan lete hai aapke game mein score by default 0 se shuru hota hai and future mein wo score badhega by 10 aur aapko page pe show bhi krna hai jab score badhe. Toh use case mein aapka score variable ek state mein rakhna jaruri hai, kyuki react sirf usse change krta hai jo state mein hota hai

4. Always change the state, and whaterver the changes are, react will automatically update it.

5. useState gives us a array of two values, the first is the current state, and the second is a function to update the state.

6. As useState returns an array, we can destructure it to get the state and the function to update the state.

7. Whatever value we pass to the useState, can be access by the array index 0.

8. And in the array index 1 we get the funtion to update that state.

9. Always remember we only get two values from the array i.e the state variable and the function.

10. To get the value we can destructure the array.

11. Always remember that when we have state variable value as an object, we cannot pass the old value to the function to update the state, instead we have to pass a new value i.e. we copy the old value using 'spread operator' and whatever change we want to make we can do that.
