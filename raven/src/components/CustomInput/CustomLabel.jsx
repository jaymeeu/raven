import React from 'react'

const CustomLabel = ({label, amount}) => {
  return (
    <div className='custom__label'>
        <div className="custom__label--text">
            {label}
        </div>
        <div className="custom__label--value">
            {amount}
        </div>
    </div>
  )
}

export default CustomLabel
