import Link from 'next/link'
import React from 'react'

function EmptyMessageComponenet({ message }) {
    return (
        <div className='w-full'>

            <div class="fail-to-load">
                <p>Oops This Information Is Not Available Yet, For More Updates Don't Hesitate To  </p>

                <Link className='expert-advice-btn' href="/contact">Get
                    In Touch With Us</Link>
            </div>


        </div>
    )
}

export default EmptyMessageComponenet