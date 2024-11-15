import React, { useState } from "react";

function Index2() {
    const [val, setVal] = useState([1, 2, 3, 4, 5]);

    return (
        <div className="p-5 bg-slate-400 font-mono">
            {val.map((item) => (
                <p className="text-2xl">{item}</p>
            ))}
            <button
                onClick={() =>
                    setVal(() =>
                        val.filter((item, index) => {
                            return index != val.length - 1;
                        })
                    )
                }
                className="px-3 py-1 text-white text-sm bg-black rounded-md mt-2"
            >
                Remove
            </button>
        </div>
    );
}

export default Index2;

/*

Explanation - The initial state is an array of numbers. Each button click removes the last item from the array.

Initial State Setup
-------------------
val = [1, 2, 3, 4, 5]

User Clicks Button
------------------
Trigger --> onClick = { () => setVal(() => val.filter((item, index) => index != val.length - 1)) }

Detailed Step-by-Step Execution
--------------------------------

1. **Button Click Trigger:**
   - When the "Remove" button is clicked, the `onClick` event handler is activated.

2. **Calling setVal with a Filtered Array:**
   - Inside the `onClick` handler, the `setVal` function is called to update the state.
   - We pass an arrow function to `setVal`, which creates a new array by filtering `val`.

3. **Filtering Process:**
   - `val.filter((item, index) => index != val.length - 1)`:
     - The `filter` method iterates over each element in `val`.
     - For each `item` in `val`, `filter` checks its `index`.
     - `filter` only keeps items where the index is not equal to `val.length - 1` (the last item in the array).
     - **Example:** If `val = [1, 2, 3, 4, 5]`, the filter condition excludes the item at index `4` (the last element, `5`), returning `[1, 2, 3, 4]`.

4. **Returning the Filtered Array:**
   - The filtered array `[1, 2, 3, 4]` is the return value of the arrow function inside `setVal`.
   - This filtered array becomes the new value for `val`.

Updating State and Re-rendering
--------------------------------
1. **React Schedules an Update:**
   - React schedules an update to re-render the component with the new state.

2. **Updating `val` State:**
   - React updates `val` to the new filtered array, e.g., `[1, 2, 3, 4]`.

3. **Component Re-rendering:**
   - After updating `val`, React re-renders the component.
   - The updated `val` state is used to render the UI, showing `[1, 2, 3, 4]`.

4. **Updated UI Display:**
   - The UI now displays the modified `val` array, reflecting the removed last item.

Repeat Process
--------------
- Each time the "Remove" button is clicked, the last element of the array is removed following the same steps.
- This continues until `val` becomes an empty array.

*/
