import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import BlogComponent from '../../Components/BlogComponent/BlogComponent'
import useDocumentTitle from '../../PageTitle'

const Blogs = () => {
  useDocumentTitle("TRoo Solar | Blogs")
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <BlogComponent/>
      <Footer/>
    </div>
  )
}

export default Blogs