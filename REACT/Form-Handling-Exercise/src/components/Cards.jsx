import React from "react";
import Card from "./Card";

function Cards({ users, handleRemoveUser }) {
    return (
        <div className="w-full h-76 max-h-76 overflow-auto flex justify-center flex-wrap p-4 gap-4">
            {users.map((item, index) => {
                return <Card user={item} key={index} id={index} handleRemoveUser={handleRemoveUser} />;
            })}
        </div>
    );
}

export default Cards;
