import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import Footer from '../Components/Footer/Footer'
import GetQouteComponent from '../Components/GetQouteComponent/GetQouteComponent'
import useDocumentTitle from '../PageTitle'

const Qoute = () => {
  useDocumentTitle("TRoo Solar | Qoute ")
  return (
    <div class="get-qoute">
      <Header/>
      <HeroGlobal/>
      <GetQouteComponent/>
      <Footer/>
    </div>
  )
}

export default Qoute