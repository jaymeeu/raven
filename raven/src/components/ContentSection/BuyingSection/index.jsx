import React from 'react'
import './style.css'
import ToggleAction from './ToggleAction'
import ToggleIMarket from './ToggleIMarket'
import BuyForm from './BuyForm'
import LimitForm from './LimitForm'
import DepositForm from './DepositForm'

const Index = () => {
  return (
    <div className='buying__container'>
      <ToggleAction />
      <ToggleIMarket/>
      <LimitForm/>
      <DepositForm/>
    </div>
  )
}

export default Index
