import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import ServiceComponent2 from '../../Components/ServiceComonent/ServiceComponent2'
import WorkingProcess from '../../Components/WorkingProcess/WorkingProcess'
import ProjectListCompoenent from '../../Components/ProjectComponent/ProjectListCompoenent'
import useDocumentTitle from '../../PageTitle'

const Service = () => {
  useDocumentTitle("TRoo Solar | Services")
  return (
    <div class="services">
      <Header/>
      <HeroGlobal/>
      <ServiceComponent2/>
      <WorkingProcess/>
      <ProjectListCompoenent />
      <Footer/>
    </div>
  )
}

export default Service