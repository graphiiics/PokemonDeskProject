import React from 'react'
import './info.css'

const Info = ({title, message}) => {
    return (
        <div className='info-container'>
            <h2 className='title'>{title}</h2>
            <p className='message'>{message}</p>
        </div>
    )
}

export default Info
