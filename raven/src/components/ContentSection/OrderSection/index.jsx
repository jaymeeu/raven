import React from 'react'
import './style.css'
import ToggleIcons from '../OrderSection/ToggleIcons'
import Toggle from './Toggle'
import BookTable from '../BookTable'
const Index = () => {
  return (
    <div className='order__container'>
      <Toggle/>
      <ToggleIcons/>
      <BookTable/>
      
    </div>
  )
}

export default Index
