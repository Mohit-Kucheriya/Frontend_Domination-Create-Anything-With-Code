import React, { useState } from "react";

function Index5() {
    const [val, setVal] = useState([
        { name: "Mohit", age: 23 },
        { name: "Harry", age: 25 },
        { name: "Rohit", age: 22 },
    ]);

    return (
        <div className="p-5 bg-slate-700 font-mono text-slate-300">
            {val.map((item) => {
                return (
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">Name: {item.name}</h1>
                        <h3 className="text-xl mb-2">Age: {item.age}</h3>
                    </div>
                );
            })}
            <button
                onClick={() =>
                    setVal(
                        val.map((item) =>
                            item.name === "Harry" ? { name: "Harry", age: 26 } : item
                        )
                    )
                }
                className="px-3 py-1 bg-black text-white text-sm rounded-md"
            >
                Change
            </button>
        </div>
    );
}

export default Index5;
