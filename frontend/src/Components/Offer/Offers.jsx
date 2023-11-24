import React from 'react'
import exclusive_image from '../Asserts/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you!</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
    </div>
    <div className="offers-right">
        <img src={exclusive_image} alt="exclusive img"/>
    </div>
    </div>
  )
}

export default Offers
