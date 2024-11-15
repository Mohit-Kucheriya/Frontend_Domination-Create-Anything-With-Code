import React, { useState } from "react";

function Index3() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <div className="p-5 bg-slate-500 font-mono">
            {val.map((item) => (
                <p className="text-2xl">{item}</p>
            ))}
            <button
                onClick={() =>
                    setVal(() =>
                        val.filter((item, index) => {
                            return !(item % 2 === 0);
                        })
                    )
                }
                className="px-3 py-1 text-white text-sm bg-black rounded-md mt-2"
            >
                Remove Even Number
            </button>
        </div>
    );
}

export default Index3;
