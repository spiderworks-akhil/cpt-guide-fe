import React from 'react'
import Spinner from '../Spinner/Spinner'

function SubmitButton({ label, disable, loading, className, onClick }) {
    return (
        <div>

            <button className={className} disabled={disable} onClick={onClick}>
                {loading ? <Spinner /> : label}
            </button>
        </div>
    )
}

export default SubmitButton