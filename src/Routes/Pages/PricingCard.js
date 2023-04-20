import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import PricingComponent from '../../Components/PricingComponent/PricingComponent'
import useDocumentTitle from '../../PageTitle'

const PricingCard = () => {
  useDocumentTitle("TRoo Solar | Pricing Card ")
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