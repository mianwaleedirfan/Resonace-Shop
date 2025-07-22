// import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Cpicker from '../components/Cpicker'
import Feacard from '../components/Feacard'
import Pdetail from '../components/Pdetail'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Cpicker/>
        <Feacard/>
        <Pdetail/>
        <Cta/>
        <Footer/>
      </div>
  )
}

export default Home