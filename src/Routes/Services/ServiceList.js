import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ServiceListComponent from '../../Components/ServiceComonent/ServiceListComponent'
import useDocumentTitle from '../../PageTitle'

const ServiceList = () => {
  useDocumentTitle("TRoo Solar | Service Lists ")
  return (
    <div class="services-list">
      <Header/>
      <HeroGlobal/>
      <ServiceListComponent/>
      <Footer/>
    </div>
  )
}

export default ServiceList