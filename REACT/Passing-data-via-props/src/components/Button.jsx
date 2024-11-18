import React from 'react'

function Button(props) {

    console.log(props)

    return (
        <div className='font-mono'>
            <button className='px-3 py-1 bg-blue-500 text-sm rounded-md text-white m-2'>{props.text}</button>
        </div>
    )
}

export default Button