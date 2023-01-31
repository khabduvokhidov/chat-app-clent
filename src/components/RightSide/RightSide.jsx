import React, { useState } from 'react'
import NavIcons from '../NvaIcons/NavIcons'
import ShereModal from '../shereModal/ShereModal'
import TrendCar from '../TrendCar/TrendCar'

import "./rightSide.css"

export default function RightSide() {
    const [ openModal, setOpenModal ] = useState(false)

  return (
    <>
      <div className='rightSide'>
          {/*  navbar */}
          <NavIcons />
          {/* top Posts */}
          <TrendCar />
          {/* shere Modal */}
          <button className='button r-button' onClick={()=> setOpenModal(true)}>
            Share
          </button>
          
          <ShereModal  openModal = {openModal} setOpenModal = {setOpenModal} /> 

      </div>

      <div className='rightSide-response'>
        {/*  navbar */}
        <NavIcons />

       
        
        {/* top Posts */}
        <TrendCar />
      </div>
    </>
  )
}
