import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ServiceDetailsComponent from '../../Components/ServiceComonent/ServiceDetailsComponent'
import useDocumentTitle from '../../PageTitle'

const ServiceDetails = () => {
  useDocumentTitle("TRoo Solar | Service Details")
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