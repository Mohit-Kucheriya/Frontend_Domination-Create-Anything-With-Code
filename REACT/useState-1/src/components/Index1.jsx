import React, { useState } from "react";

function Index1() {
    const [val, setVal] = useState({ name: "Harry Potter", age: 23 });

    return (
        <div className="p-5 bg-slate-300 font-mono">
            <h1 className="text-2xl font-semibold mb-1">Name: {val.name}</h1>
            <h3 className="text-xl mb-2">Age: {val.age}</h3>
            <button
                onClick={() => {
                    setVal({ ...val, gender: "Male" });
                    console.log(val); // We get the old value of the state variable
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
            >
                Add
            </button>
        </div>
    );
}

export default Index1;

/*

When you call a function to update a state variable, React puts that update in a queue and waits until the function (or component render) is complete. Afterward, it applies the updates and re-renders the component with the new state.

*/
