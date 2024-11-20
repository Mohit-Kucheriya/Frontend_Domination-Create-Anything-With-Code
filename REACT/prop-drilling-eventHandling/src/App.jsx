import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Jhonny Depp",
      position: "Pirate",
      image:
        "https://wallpaper.forfun.com/fetch/01/015c3a0e07d70004a389d1198fa02131.jpeg",
      friends: false,
    },
    {
      name: "Keira Knightley",
      position: "Developer",
      image:
        "https://wallpaper.forfun.com/fetch/17/17093561fc22574d5582e61eaf952d68.jpeg",
      friends: false,
    },
    {
      name: "Penelope Cruz",
      position: "Model",
      image:
        "https://wallpaper.forfun.com/fetch/48/480fed561bfa63046a44a66179bfadb7.jpeg",
      friends: false,
    },
    {
      name: "Orlando Bloom",
      position: "Actor",
      image:
        "https://wallpaper.forfun.com/fetch/1e/1e0a574a200f60bcadc175e7fb282b89.jpeg",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  /*
  
  1. We want to change the state of realData, not the data array. 
  2. state jaha banti hai wahi modify ki jaa skti hai 

  */

  const handleFriendsButton = (cardIndex) => {
    setRealData((previousDataArray) => {
      return previousDataArray.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center gap-5">
      {realData.map((item, index) => (
        <Card values={item} key={index} index={index} handleFriendsButton={handleFriendsButton} />
      ))}
    </div>
  );
}

export default App;
