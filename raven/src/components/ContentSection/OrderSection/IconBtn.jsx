import React from 'react'
import './style.css'
const IconBtn = ({icon, onClick, className}) => {
  return (
    <div onClick={onClick} className={className}>
      <img src={icon}  />
    </div>
  )
}

export default IconBtn
