import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function App() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="relative w-72 h-48 bg-zinc-500 rounded-md flex overflow-hidden ">
        <img
          className={`shrink-0 transition-all	duration-700	ease-in	 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            } w-full h-full object-cover`}
          src="https://theplace-2.com/cache/archive/lana_delrey/img/2012-sean-+-seng-v(2)-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg"
          alt=""
        />
        <img
          className={`shrink-0 transition-all	duration-700	ease-in	${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            } w-full h-full object-cover`}
          src="https://wallpaper.forfun.com/fetch/f9/f9beea7876a410af102387442aa771bf.jpeg"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center rounded-full bg-[#dadada9b] cursor-pointer"
        >
          <FaArrowRight size={"0.8em"} />
        </span>
      </div>
    </div>
  );
}

export default App;
