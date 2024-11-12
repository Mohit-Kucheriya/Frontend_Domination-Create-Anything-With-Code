import React from 'react'

function NewCard() {

    const data = [
        {
            songName: "All Around the World",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quidem.",
        },
        {
            songName: "Heartbreaker",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quidem.",
        },
        {
            songName: "Never say never",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quidem.",
        },
    ]

    const handleClickDownload = () => {
        alert("Downloading...")
    }


    return (
        <div className='w-full h-screen bg-neutral-400 flex justify-center items-center flex-col gap-4' >
            {data.map((song, index) => (
                <div className='w-96 px-3 py-2 bg-zinc-200 rounded' key={index}>
                    <h1 className='font-medium text-xl'>{song.songName}</h1>
                    <p className='text-xs opacity-80 mt-2'>{song.description}</p>
                    <button onClick={handleClickDownload} className='bg-blue-500 text-white  text-xs px-3 py-2 rounded mt-4'>Download Now</button>
                </div>
            ))}

        </div>
    )
}

export default NewCard 