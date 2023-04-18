import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import PricingComponent from '../../Components/PricingComponent/PricingComponent'

const PricingCard = () => {
  return (
    <div className='pricing'>
      <Header/>
      <HeroGlobal/>
      <PricingComponent/>
      <Footer/>
    </div>
  )
}

export default PricingCard