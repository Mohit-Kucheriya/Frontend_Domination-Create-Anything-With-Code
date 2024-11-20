import React from "react";

function Card({ values, index, handleFriendsButton }) {
    const { name, position, image, friends } = values;

    return (
        <div className="w-52 bg-zinc-50 rounded-lg overflow-hidden font-mono shadow-lg">
            <div className="w-full h-32">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="w-full p-3 ">
                <h2 className="text-xl font-semibold">{name}</h2>
                <h3 className="text-sm ">{position}</h3>
                <button
                    onClick={() => handleFriendsButton(index)}
                    className={`mt-3 px-2 py-1 rounded-md text-sm text-white ${friends ? "bg-green-700" : "bg-red-700"
                        }`}
                >
                    {friends ? "Freinds" : "Add Friends"}
                </button>
            </div>
        </div>
    );
}

export default Card;
