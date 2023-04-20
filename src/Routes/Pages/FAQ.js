import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import FAQcomponent from '../../Components/FAQComponent/FAQcomponent'
import useDocumentTitle from '../../PageTitle'

const FAQ = () => {
  useDocumentTitle("TRoo Solar | FAQs")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <FAQcomponent/>
      <Footer/>
    </div>
  )
}

export default FAQ