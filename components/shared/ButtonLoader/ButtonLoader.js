import React from 'react'

function ButtonLoader() {
    return (
        <div className='load-more-btn popup ' style={{
            width: '100%', display: 'flex', justifyContent: "center"
        }}><span className='circle-loader'></span></div>
    )
}

export default ButtonLoader