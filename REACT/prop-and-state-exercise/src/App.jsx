import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const data = [
    {
      songName: "Shape of You",
      artist: "Ed Sheeran",
      favourite: false,
      image:
        "https://wallpaper.forfun.com/fetch/ba/ba4cabdfc719689f6fe5af7fbbf4ccd5.jpeg",
    },
    {
      songName: "Popular",
      artist: "The Weeknd",
      favourite: false,
      image:
        "https://wallpaper.forfun.com/fetch/2f/2fbc188c45754c40ff9a6b0b4ed2c9bb.jpeg",
    },
    {
      songName: "Like You",
      artist: "Adele",
      favourite: false,
      image:
        "https://wallpaper.forfun.com/fetch/43/4368232867788dfe492b418d5ef63bde.jpeg",
    },
    {
      songName: "Believer",
      artist: "Imagine Dragons",
      favourite: false,
      image:
        "https://wallpaper.forfun.com/fetch/5c/5c7e583bd10b07eb5486fdd50d9142c5.jpeg",
    },
    {
      songName: "Baby",
      artist: "Justin Bieber",
      favourite: false,
      image:
        "https://wallpaper.forfun.com/fetch/db/db5d831ddbe1f07cac490e65c3b5a060.jpeg",
    },
  ];

  const [realData, setRealData] = useState(data);

  const addToFavourite = (cardIndex) => {
    setRealData((previousDataArray) => {
      return previousDataArray.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, favourite: !item.favourite };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full min-h-screen bg-zinc-300 py-10">
      <Navbar data={realData} />

      <div className="flex flex-wrap gap-10 px-20 mt-10 ">
        {realData.map((item, index) => (
          <Card
            values={item} // this is the data, i.e. the whole object
            key={index}
            index={index}
            addToFavourite={addToFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
