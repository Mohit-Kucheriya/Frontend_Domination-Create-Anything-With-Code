import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="w-52 bg-zinc-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden ">
        <div className="w-full h-32 bg-zinc-300">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/10/21/05/canon-4837692_1280.jpg"
            alt="Amazon Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-2 py-4">
          <h1 className="text-xl font-semibold">Amazon Basics</h1>
          <p className="text-xs opacity-80 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            repudiandae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
