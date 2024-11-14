import React, { useState } from "react";
import Intermediate from "./components/Intermediate";
import Advanced from "./components/Advanced";

function App() {
  const ans = useState({ name: "Mohit" });
  console.log(ans);
  console.log(ans[0]);
  console.log(ans[1]);

  const [score, setScore] = useState(10);
  console.log(score);

  const [toggle, setToggle] = useState(false);

  return (
    // <>
    //   <div className="p-10">
    //     <h1 className="text-xl font-mono font-semibold">Score: {score}</h1>
    //     <button
    //       onClick={() => setScore(200)}
    //       className="px-2 py-1 bg-zinc-700 text-white rounded-md text-xs font-mono"
    //     >
    //       Counter
    //     </button>
    //   </div>

    //   <div className="p-10">
    //     <h1 className="text-xl font-mono font-semibold">
    //       Toggle: {toggle.toString()}
    //     </h1>
    //     <button
    //       onClick={() => setToggle(!toggle)}
    //       className="px-2 py-1 bg-zinc-700 text-white rounded-md text-xs font-mono"
    //     >
    //       Toggle Button
    //     </button>
    //   </div>
    // </>

    // <>
    //   <Intermediate />
    // </>

    <>
      <Advanced />
    </>
  );
}

export default App;
