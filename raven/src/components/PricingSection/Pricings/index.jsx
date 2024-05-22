import React from 'react'
import './style.css'

const Index = ({icon, duration, price, percentage, type}) => {
  return (
    <div className='price__card'>
      <div className='price__duration'>
        {icon}
        <div>{duration}</div>
      </div>
      <div className={type ? "price__text--green" : "price__text"}>
        <span>{price}</span>
        <span>{percentage}</span>
      </div>
    </div>
  )
}

export default Index
