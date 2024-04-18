import React from 'react'

function LoadingButton({ onClick }) {
    return (
        <button className='load-more-btn' onClick={onClick}>Load more <span className='circle-loader'></span></button>
    )
}

export default LoadingButton