import React from "react";

function Card({ values, index, addToFavourite }) {
    const { songName, artist, favourite, image } = values;
    return (
        <div className="relative w-60 bg-white p-3 rounded-lg flex gap-3 font-mono pb-10 mt-5">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div>
                <h2 className="text-xl font-semibold tracking-tighter">{songName}</h2>
                <h3 className="text-sm font-medium">{artist}</h3>
            </div>
            <button onClick={() => addToFavourite(index)} className={`absolute bottom-0 left-1/2 whitespace-nowrap -translate-x-[50%] translate-y-[50%] px-4 py-2 ${favourite ? "bg-teal-600" : "bg-orange-600"} text-white rounded-full text-xs`}>
                {favourite ? "Added" : "Add to Favorites"}
            </button>
        </div>
    );
}

export default Card;
