// JavaScript Generators
// Generator ek special type ka function hota hai jo hume function ke execution ko pause aur resume karne ki ability deta hai. Yaani, normal function jaise seedha start se end tak nahi chalti, balki yeh beech mein ruk kar waapas control de sakti hai.

// Basic Syntax:

function* myGenerator() {
    yield "First value";
    yield "Second value";
    yield "Third value";
}
/*
function*: Generator function ko banane ke liye hum function* (star *) use karte hain.
yield: Yeh keyword generator function ko temporarily stop (pause) karta hai, aur ek value return karta hai.
Example Step by Step:
Generator Declare karna:

function* myGenerator() likhne se ek generator function ban jata hai.
yield ka use:

yield keyword ko use karke hum function ko pause kar sakte hain aur ek value return kar sakte hain. Jaise: yield 'First value'; – is line pe aake function ruk jaayega aur "First value" return karega.
Generator ko call karna:

Jab aap generator function ko call karte hain, toh yeh immediately execute nahi hota, balki ek "iterator" object return karta hai.
javascript
Copy code
const gen = myGenerator();
Next value ko access karna:

gen.next() call karne pe generator function chalu hota hai, aur pehli yield tak execute hota hai. Jaise aap gen.next() call karenge, toh yeh First value return karega aur wahan pe pause ho jayega.
Isko dobara call karne pe yeh agle yield tak chalega aur next value return karega.
*/

// Full Example:

function* myGenerator() {
    yield "First value"; // Pauses here and returns 'First value'
    yield "Second value"; // Pauses here and returns 'Second value'
    yield "Third value"; // Pauses here and returns 'Third value'
}

const gen = myGenerator();

console.log(gen.next().value); // Output: 'First value'
console.log(gen.next().value); // Output: 'Second value'
console.log(gen.next().value); // Output: 'Third value'
console.log(gen.next().value); // Output: undefined (Generator is done)

/*
Explanation:
Jab gen.next() pehli baar call hota hai, toh generator function start hota hai aur pehle yield tak rukta hai, First value return karta hai.

Jab gen.next() ko dubara call karte hain, toh generator pehle yield ke baad se resume hota hai aur agle yield tak rukta hai.

Jab generator ke saare yield points complete ho jaate hain, toh agle call par undefined return hota hai, kyunki generator khatam ho chuka hota hai.

Advantages:
Generators useful hote hain jab hume koi complex task ko step-by-step karna ho ya large data ko process karte waqt beech mein pause karna ho.
Yeh asynchronous tasks (like API requests) ko handle karne mein bhi madad karte hain.


Conclusion:
Generator ek special function hai jo beech mein pause aur resume kar sakta hai, aur har baar next() call karne par ek yield se value return karta hai.
*/
