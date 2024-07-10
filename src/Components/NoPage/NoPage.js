import React from 'react'
import errorImg from "./404_animation.gif"

const NoPage = () => {
    return (
        <div className=' container p-5 text-center'>
            <img src={errorImg} alt='' className='w-50' />
        </div>
    )
}

export default NoPage