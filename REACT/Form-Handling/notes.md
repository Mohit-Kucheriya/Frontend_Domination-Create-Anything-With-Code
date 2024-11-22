1. form handling - When we submit the form the website get's reload, and react main focus is not reload the page. So we need to handle the form submission.

2. Form Handling -
   a. useRef - is tareeke mein hum har input ko select kar lete hain and unki value tab nikalte hain jab form submit hota hai. Used to create a reference to an element.

   b. By using useRef we can select the HTML input field.

   c. Usually we pass the null in the useRef. Because it gets executes first and then the DOM gets loaded.

   d. Kyunki useRef ka kaam sirf ek value ko track karna hai.

   e. useRef hamesha ek object return karta hai jisme sirf ek property hoti hai: current. Aur ye property hamesha ek hi hoti hai.

   f. ref.current - depends on what the ref is pointing to and how it is used in your React component.

   g. current property : initial value which we give in the useRef or the value which we set or update further.
