import React from 'react'
import Header from '../components/Header'
import Cpicker from '../components/Cpicker'
import Audiotechinfo from '../components/Audiotechinfo'
import Intelligence from '../components/Intelligence'
import Power from '../components/Power'
import Controls from '../components/Controls'
import Footer from '../components/Footer'


function Tspecs() {
  return (
    <div>
        <Header/>
        <h1 >Colours</h1>
        <Cpicker/>
        <Audiotechinfo/>
        <div><br /></div>
        <Intelligence/>
        <div><br /></div>
        <Power/>
        <div><br /></div>
        <Controls/>
        <div><br /></div>
        <Audiotechinfo/>
        <div><br /></div>
        <Intelligence/>
        <div><br /></div>
        <Power/>
        <div><br /></div>
        <Footer/>
        

    </div>
  )
}

export default Tspecs