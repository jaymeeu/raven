import React from 'react'
import './style.css'
import ToggleAction from './ToggleAction'
import ToggleIMarket from './ToggleIMarket'
import BuyForm from './BuyForm'
import LimitForm from './LimitForm'
import DepositForm from './DepositForm'
import { useSearchParams } from 'react-router-dom'
import StopForm from './StopForm'
import MarketForm from './MarketForm'

const Index = () => {

  const [searchParams, _setSearchParams] = useSearchParams();
  const status = searchParams.get("market")

  return (
    <div className='buying__container'>
      <ToggleAction />
      <ToggleIMarket />
      {
        status === "stop-limit" ?
          <StopForm />
          :
          status === "market" ?
            <MarketForm />
            :
            <LimitForm />
      }
      <DepositForm />
    </div>
  )
}

export default Index
