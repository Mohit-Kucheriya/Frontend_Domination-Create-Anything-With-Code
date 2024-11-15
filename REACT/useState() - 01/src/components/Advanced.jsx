import React, { useState } from "react";

function Advanced() {
    const [val, setVal] = useState({ name: "Mohit", isBanned: false });

    return (
        <div className="p-5 font-mono">
            <h1 className="text-3xl font-semibold">Advanced</h1>
            <h3 className="text-xl font-medium">Name: {val.name}</h3>
            <p className="text-xl font-medium">
                Is Banned: {val.isBanned.toString()}
            </p>
            <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })} className="px-2 py-1 rounded-md text-white bg-black mt-2">
                Ban User
            </button>
        </div>
    );
}

export default Advanced;

/*

Explanation -  The initial state is an object with two properties, name and isBanned.

Initial State Setup
-------------------
val = { name: "Mohit", isBanned: false }

User Clicks Button
------------------
Trigger --> onClick = { () => setVal({ ...val, isBanned: !val.isBanned }) }

Calling setVal({ ...val, isBanned: !val.isBanned })
----------------------------------------------------
1. React schedules an update.
2. React calls setVal with the new value.
3. Function calculates new value: setVal({ ...val, isBanned: !val.isBanned })
   - Example: if val = { name: "Mohit", isBanned: false }, then new value = { name: "Mohit", isBanned: true }

Updating State and Re-rendering
--------------------------------
1. React updates val to { name: "Mohit", isBanned: true }.
2. Component re-renders with val = { name: "Mohit", isBanned: true }.
3. UI displays updated val.

*/
