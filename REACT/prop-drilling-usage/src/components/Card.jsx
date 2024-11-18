import React from "react";

function Card({ value }) {
    const { name, position, image } = value; // destructuring the object

    return (
        <div className="w-56 bg-zinc-100 rounded-lg shadow-md overflow-hidden font-mono">
            <div className="w-full h-36 bg-blue-300">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="w-full p-3 ">
                <h2 className="text-xl font-semibold">{name}</h2>
                <h3 className="text-sm font-medium">{position}</h3>
                <button
                    onClick={() => alert(`${name} added successfully`)}
                    className="mt-3 px-2 py-1 rounded-md font-semibold text-sm text-white bg-blue-700"
                >
                    Add friend
                </button>
            </div>
        </div>
    );
}

export default Card;
