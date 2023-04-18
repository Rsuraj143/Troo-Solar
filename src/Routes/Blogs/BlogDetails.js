import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import Footer from '../../Components/Footer/Footer'
import BlogDetailsComponent from '../../Components/BlogComponent/BlogDetailsComponent'

const BlogDetails = () => {
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <BlogDetailsComponent/>
      <Footer/>
    </div>
  )
}

export default BlogDetails