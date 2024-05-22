import React, { useState } from 'react'
import './style.css'
import { IoMdInformationCircleOutline } from "react-icons/io";

const CustomInput = ({value, setValue, label, placeholder}) => {

    const formatAmount = (value) => {
        if (!value) return ''; 
        const numericValue = Number(value.replace(/[^0-9]/g, '')); // Convert to number
        return numericValue.toLocaleString('en-US');
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setValue(formatAmount(value));
    };

  return (
    <div className='input__container' >
        <div className="input__label">
            <span>{label}</span>
            <IoMdInformationCircleOutline/>
        </div>
        <input 
            value={value}
            onChange={handleInputChange} 
            placeholder={placeholder} type='text' className="input__input"/>

    </div>
  )
}

export default CustomInput
