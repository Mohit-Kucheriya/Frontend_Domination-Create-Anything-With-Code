import React from "react";

function Navbar({ data }) {
    console.log(data);

    return (
        <div className="w-full px-20 py-3 flex justify-between items-center font-mono">
            <h2 className="text-2xl font-semibold uppercase text-orange-600">
                Orange
            </h2>
            <div className="flex gap-2 p-2 px-4 text-sm bg-orange-600 text-white rounded-lg leading-none">
                <h3>Favourite</h3>
                <h3>{data.filter((item) => item.favourite).length}</h3>
            </div>
        </div>
    );
}

export default Navbar;

/*

Explanation - We accept the data as a prop which is the whole array of objects. We can use the filter method to filter the favourite items from the array. If item.favourite is true then we return the item. Then we use the length method to get the count of the filtered items in that array.

filter - filter() method return a new array only when the condition is true. Only items that are true will be returned in new array.

*/
