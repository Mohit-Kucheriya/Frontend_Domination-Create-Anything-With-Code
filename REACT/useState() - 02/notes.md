1. useState state to turant update nahi karta, wo useState state ko update karta apne hisaab se function completion ke baad, to fix performance issue.

2. React's state updates are asynchronous. They happen after the function has finished executing. This means that the state updates will not be visible to the user immediately after the function is called.

