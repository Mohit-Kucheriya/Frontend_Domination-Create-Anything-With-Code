What Happens During the Two setVal Calls?

1. Initial State:

   - Before any updates, val = false.

2. First setVal Call:

   - The updater function is called.

   setVal((prevVal) => !prevVal);

   - Since the current state (prevVal) is false, the function computes:
     !prevVal → !false → true

   - React queues this update to change val to true.

3. Second setVal Call:

   - Immediately after the first call, you invoke:

     setVal((prevVal) => !prevVal);

   - React has not yet applied the first update, so prevVal is still the initial value (false).

   - The updater function computes:

   !prevVal → !false → true

4. React queues this update to change val to true.

   - First Update: React applies the first queued update, setting val to true.

   - Second Update: Now React processes the second update. At this point, val = true (from the first update). The updater function toggles it back to false:

   !prevVal → !true → false

5. Final State:

   - After React processes both updates, the final value of val is false.

6. Key Points:

   - Both setVal calls use the same initial state (false) when invoked, as React does not immediately apply state updates.

   - React batches the updates to optimize performance.

   - During the batch processing:

   - - The first call toggles the state: false → true.

   - - The second call operates on the updated state (true) and toggles it: true → false.

7. Conclusion:

   - React batches updates and processes them sequentially, which results in the state toggling back and forth.

8. React Processes the Queue:

   a. React Applies the First Updater:

   - The updater function (prevVal) => !prevVal is executed with the current state (false).

   - The function computes:
     !false → true.

   - React updates the state to true.

   b. React Applies the Second Updater:

   - The second updater function (prevVal) => !prevVal is executed with the latest state (true) from the previous update.

   - The new state becomes:
     !true → false

   - React updates the state to false.
