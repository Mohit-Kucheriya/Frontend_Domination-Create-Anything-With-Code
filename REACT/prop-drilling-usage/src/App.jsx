import React from "react";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Jhonny Depp",
      position: "Pirate",
      image:
        "https://wallpaper.forfun.com/fetch/01/015c3a0e07d70004a389d1198fa02131.jpeg",
    },
    {
      name: "Keira Knightley",
      position: "Developer",
      image:
        "https://wallpaper.forfun.com/fetch/17/17093561fc22574d5582e61eaf952d68.jpeg",
    },
    {
      name: "Penelope Cruz",
      position: "Model",
      image:
        "https://wallpaper.forfun.com/fetch/48/480fed561bfa63046a44a66179bfadb7.jpeg",
    },
    {
      name: "Orlando Bloom",
      position: "Actor",
      image:
        "https://wallpaper.forfun.com/fetch/1e/1e0a574a200f60bcadc175e7fb282b89.jpeg",
    },
  ];

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center gap-5">
      {data.map((item, index) => (
        <Card
          // passing the name, position, image and key i.e individual items to the card component
          name={item.name}
          position={item.position}
          image={item.image}
          key={index}
          value={item} // passing the whole object
        />
      ))}
    </div>
  );
}

export default App;
