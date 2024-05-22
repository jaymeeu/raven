import CustomInput from '@/components/CustomInput'
import React, { useState } from 'react'

const BuyForm = () => {

    const [amount, setAmount] = useState()

  return (
    <div>
      <CustomInput value={amount} setValue={setAmount}/>
    </div>
  )
}

export default BuyForm
