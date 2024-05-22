import CustomInput from '@/components/CustomInput'
import CustomBtn from '@/components/CustomInput/CustomBtn'
import React, { useState } from 'react'

const MarketForm = () => {

  const [amount, setAmount] = useState()

  return (
    <div className='form__container'>
      <CustomInput placeholder={'0.00 USD'} label={"Amount"} value={amount} setValue={setAmount} />
      <div className="total__text"><span>Total</span><span>0.00</span></div>
      <CustomBtn />
    </div>
  )
}

export default MarketForm
