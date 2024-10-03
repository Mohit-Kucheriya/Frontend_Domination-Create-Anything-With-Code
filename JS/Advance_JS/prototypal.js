// Prototypal Inheritence
// hum objects create krte hai and kisi ek parent constructor function ke prototype mein kucch add kr dete hai and jab bhi add hota hai toh woh parent se banane wale children instances ko wo properties jo parent ko prorotype mein di gyi thi woh milti hai saugaat mein

function makeHuman(name, age) {
    this.name = name;
    this.age = age;
}

makeHuman.prototype.printName = function () {
    return (this.name);

}

const human1 = new makeHuman("Mohit Kucheriya", 23);
console.log(human1);
console.log(human1.printName());

const human2 = new makeHuman("Ruchita Jain", 25);
// aisa koi bhi function jismein app 'this' ka use krte hai aur us function ko call krte waqt aap 'new' keyword ka use krte hai, toh new ka matlab waha par ek blank object hojaata hai.

// By using 'new', a blank object get's create and wherever we have use this, that blank object gets placed.

// Ek function jo 'this' ka use kar raha ho and new ke dwaara naye naye objects bana kar deta ho aise function ko constructor function kahte hai.
