import React, { useState } from "react";

function Index4() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <div className="p-5 bg-slate-600 font-mono text-slate-200">
            {val.map((item) => (
                <p className="text-2xl">{item}</p>
            ))}
            <button onClick={() => setVal([...val, 7, 8])} className="px-3 py-1 text-white text-sm bg-black rounded-md mt-2">
                Add
            </button>
        </div>
    );
}

export default Index4;
