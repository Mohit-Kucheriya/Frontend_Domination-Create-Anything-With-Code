import React, { useState } from "react";

function Intermediate() {
    const [score, setScore] = useState(10);
    console.log(setScore);

    return (
        <div className="p-5 font-mono">
            <h1 className="text-2xl font-semibold">Intermediate</h1>
            <p className="text-xl font-medium">Score: {score}</p>
            <button
                onClick={() => setScore((prev) => prev + 1)}
                className="px-2 py-1 bg-black text-white rounded-md text-xs font-mono mt-2"
            >
                Counter
            </button>
        </div>
    );
}

export default Intermediate;

/*

Initial State Setup
-------------------
score = 10


User Clicks Button
------------------
Trigger --> onClick = { () => setScore((prev) => prev + 1) }


Calling setScore((prev) => prev + 1)
------------------------------------
1. React schedules an update.
2. React calls (prev) => prev + 1 with prev = current score value.
   - Example: if score = 10, then prev = 10.
3. Function calculates new score: prev + 1 = 11.


Updating State and Re-rendering
--------------------------------
1. React updates score to 11.
2. Component re-renders with score = 11.
3. UI displays updated score.

*/
