import React from 'react'
import './style.css'

import Topnav from '@/components/Topnav'
import PricingSection from '@/components/PricingSection'
import ContentSection from '@/components/ContentSection'

const Index = () => {
  return (
    <div>
      <Topnav />
      <div className="container">
        <PricingSection/>
        <ContentSection/>

      </div>
    </div>
  )
}

export default Index
