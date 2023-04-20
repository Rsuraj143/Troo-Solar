import React from 'react'
import Header from '../Components/Header/Header'
import HeroGlobal from '../Components/HeroComponent/HeroGlobal'
import Footer from '../Components/Footer/Footer'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import useDocumentTitle from '../PageTitle'

const Contact = () => {

  useDocumentTitle("TRoo Solar | Contact")

  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default Contact