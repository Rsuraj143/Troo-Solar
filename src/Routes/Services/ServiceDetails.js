import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ServiceDetailsComponent from '../../Components/ServiceComonent/ServiceDetailsComponent'

const ServiceDetails = () => {
  return (
    <div>
    <Header/>
    <HeroGlobal/>
    <ServiceDetailsComponent/>
    <Footer/>
  </div>
  )
}

export default ServiceDetails