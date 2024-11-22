import React from "react";
import { useRef } from "react";

function App() {
  const name = useRef(null);
  console.log(name); // Initial - {current: null}
  console.log(name.current); // null

  const age = useRef(null);
  console.log(age); //

  const handleFormClick = (event) => {
    event.preventDefault(); // prevent default - stops propagation of click event.
    console.log(name.current); // here ref.current i.e. name.current is pointing to the input text field

    console.log(name.current.value);

    console.log(age.current.value);
  };

  return (
    <form action="" onSubmit={handleFormClick}>
      <input ref={name} type="text" placeholder="name" />
      <input ref={age} type="text" placeholder="age" />
      <input type="submit" />
    </form>
  );
}

export default App;

/*

const name = useRef(null); // Create a ref object
console.log(name); // {current: null} Initially, it's null because DOM hasn't rendered yet

<input ref={name} type="text" placeholder="name" /> 
// After rendering, name.current will contain the input field's DOM reference

*/

/*

Here's the detailed explanation of the above code - 
Step 1: Initial Render
-----------------------
- useRef creates references for name and age (null initially).
- Form and input fields are displayed on the screen.

Step 2: User Types Values
--------------------------
- User types something in the name and age input fields.

Step 3: Form Submission
------------------------
- User clicks the submit button.
- handleFormClick is triggered.
- event.preventDefault() prevents page reload.
- name.current and age.current are DOM elements referencing the inputs.

Step 4: Logging Values
----------------------
- console.log(name.current.value) prints the "name" input value.
- console.log(age.current.value) prints the "age" input value.


Key Points:
1. current Property: The ref.current holds the actual reference to the DOM element. Initially, it's null, but after rendering, it points to the associated DOM element.

2. Form Submission Handling: event.preventDefault() stops the form from refreshing the page, allowing you to handle form data manually using refs.

*/

/* 
behavior of console.log(name) at different stages:

1. Initial Log (Before Rendering):
{ current: null }

2. After Rendering and Before Form Submission:
{ current: <input type="text" placeholder="name" /> }
This change happens after the component has mounted, and React assigns the DOM node (input element) to the name reference.

3. When the form is submitted, the handleFormClick function is executed. Inside this function, name.current still refers to the same DOM element (the input field for "name") because name.current doesn't change after the component renders—it simply holds a reference to the input DOM element throughout.

Example Flow:
a. Before Submission (initial render):
name.current = <input type="text" placeholder="name" />

b. User types "John" in the input field.

c. On Form Submission (after clicking submit):
 - name.current = <input type="text" placeholder="name" /> (no change in the reference).
 - name.current.value = "John" (the value entered by the user).

*/
