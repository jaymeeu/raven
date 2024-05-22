import React from 'react'
import './style.css'
import ChartSection from './ChartSection'
import OrderSection from './OrderSection'
import BuyingSection from './BuyingSection'

const Index = () => {
  return (
    <div className='content__section'>
        <div className="chart__section shadow__cardV2">
            <ChartSection/>
        </div>
        <div className="order__section shadow__card">
            <OrderSection/>
        </div>
        <div className="buying__section shadow__card">
            <BuyingSection/>
        </div>
      
    </div>
  )
}

export default Index
