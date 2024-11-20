import React from 'react'

function Button({ text, bgColor }) {

    console.log(`Text -`,text )
    console.log(`bgColor -`,bgColor )

    return (
        <div className='font-mono'>
            <button className={`px-3 py-1 ${bgColor} text-sm rounded-md text-white m-2`}>{text}</button>
        </div>
    )
}

export default Button