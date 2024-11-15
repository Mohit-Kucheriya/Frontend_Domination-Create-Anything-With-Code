import React, { useState } from "react";

function Index() {
    const [obj, setObj] = useState({ name: "Mohit Kucheriya", isFinite: false });

    return (
        <div className="p-5 bg-slate-200 font-mono">
            <h1 className="text-3xl font-semibold mb-1">
                Learning useState() in React
            </h1>
            <h3 className="text-2xl mb-1">Name: {obj.name}</h3>
            <p className=" text-xl mb-2">isFinite: {obj.isFinite.toString()}</p>
            <button onClick={() => setObj({ ...obj, isFinite: !obj.isFinite })} className={`px-3 py-1  ${obj.isFinite ? "bg-blue-500" : "bg-red-500"} text-white rounded-md text-sm`}>
                Toggle
            </button>
        </div>
    );
}

export default Index;

/*

Explanation - 
1. In the above code, we are using useState() hook to create a state object. The state object has two properties - name and isFinite. 

2. The name property is a string and the isFinite property is a boolean. 

3. We are initializing the state object with the name property set to "Mohit Kucheriya" and the isFinite property set to false. 

4. We are also using the spread operator (...) to create a new object with the existing state object and the isFinite property set to the opposite of its current value. This new object is then passed to the setObj() function, which updates the state object.

5. The useState() hook returns an array with two elements - the current state object and a function to update the state object. 

6. The current state object is accessed using the first element of the array, and the update function is accessed using the second element of the array. 

7. In the onClick event handler, we are calling the update function with a new object that has the isFinite property set to the opposite of its current value. This will update the state object and trigger a re-render of the component.

8. Based on the current value of the isFinite property, we are conditionally applying a CSS class to the button element. If the isFinite property is true, the button will have a blue background color. If it is false, the button will have a red background color.


*/
