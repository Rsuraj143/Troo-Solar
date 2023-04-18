import React from 'react'
import Header from '../../Components/Header/Header'
import HeroGlobal from '../../Components/HeroComponent/HeroGlobal'
import ErrorComponent from '../../Components/ErrorComponent/ErrorComponent'

const Error404 = () => {
  return (
    <div>
      <Header/>
      <HeroGlobal/>
      <ErrorComponent/>
    </div>
  )
}

export default Error404