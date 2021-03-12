import React from 'react'
import emptyBox from '../images/empty-box.png'

export default function NotFound() {
    return (
        <div className="page">
            <section>
                <div className='notFound-page'>
                    <img src={emptyBox} alt='empty box' />
                    <h1>Oops! That page can’t be found.</h1>
                    <h3>It looks like nothing was found at this location.</h3>
                </div>
            </section>
        </div>
    )
}
