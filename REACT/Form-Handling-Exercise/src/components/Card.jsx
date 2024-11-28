import React from "react";

function Card({ user, handleRemoveUser, id }) {
    return (
        <div className="w-52 h-full bg-zinc-100 flex flex-col items-center p-4 font-mono rounded-lg shadow-lg text-center ">
            <div className="h-[4.5vw] w-[4.5vw] bg-zinc-00 rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={user.image}
                    alt=""
                />
            </div>

            <h1 className="mt-1 text-2xl font-bold whitespace-nowrap">{user.name}</h1>
            <h3 className="mt-1 mb-1 text-sm font-semibold">{user.email}</h3>
            <p className="mt-1 text-xs text-center tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat.
            </p>

            <button onClick={() => handleRemoveUser(id)} className="mt-3 px-4 py-1 rounded-md bg-red-600 text-white text-sm">
                Remove
            </button>
        </div>
    );
}

export default Card;
