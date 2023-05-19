import React from 'react'
import loader from './spinner.gif'
const Spinner = () => {
    return (
        <div className='text-center'>
            <img className='my-4' src={loader} alt="Loading" />
        </div>
    )

}
export default Spinner