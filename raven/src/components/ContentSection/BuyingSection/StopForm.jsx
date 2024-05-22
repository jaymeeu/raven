import CustomInput from '@/components/CustomInput'
import CustomBtn from '@/components/CustomInput/CustomBtn'
import SelectInput from '@/components/CustomInput/SelectInput'
import React, { useState } from 'react'

const StopForm = () => {

  const [amount, setAmount] = useState()
  const [trigger, setTrigger] = useState()
  const [price, setPrice] = useState()
  const [good, setGood] = useState()

  return (
    <div className='form__container'>
      <CustomInput placeholder={'0.00 USD'} label={"Trigger price"} value={trigger} setValue={setTrigger} />
      <CustomInput placeholder={'0.00 USD'} label={"Limit price"} value={price} setValue={setPrice} />
      <CustomInput placeholder={'0.00 USD'} label={"Amount"} value={amount} setValue={setAmount} />
      <CustomInput placeholder={'Good till cancelled'} label={"Type"} value={good} setValue={setGood} />
      <div className="total__text"><span>Total</span><span>0.00</span></div>
      <CustomBtn />
    </div>
  )
}

export default StopForm
