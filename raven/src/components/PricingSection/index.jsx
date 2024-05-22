import React from 'react'
import './style.css'
import PricingSelector from '@/components/PricingSection/PriceSelector'
import Pricings from '@/components/PricingSection/Pricings'
import { IoMdTime } from 'react-icons/io'
import { TbArrowNarrowUp, TbArrowNarrowDown } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
const Index = () => {
    return (
        <div className='pricing__container shadow__card'>
            <PricingSelector />
            <div className='pricing__scrollable'>
                <Pricings 
                    icon={<IoMdTime size={16} />} 
                    duration={"24h Change"} 
                    price={"520.80"} 
                    percentage={"+1.25%"}
                    type="green"
                />
                 <Pricings 
                    icon={<TbArrowNarrowUp size={16} />} 
                    duration={"24h High"} 
                    price={"520.80"} 
                    percentage={"+1.25%"}
                />
                 <Pricings 
                    icon={<TbArrowNarrowDown size={16} />} 
                    duration={"24h Low"} 
                    price={"520.80"} 
                    percentage={"+1.25%"}
                />
                 <Pricings 
                    icon={<FaRegChartBar size={16} />} 
                    duration={"24h Volumn"} 
                    price={"75.655.26"} 
                    // percentage={"+1.25%"}
                />
                
            </div>
        </div>
    )
}

export default Index
