import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from "../../images/home.png"
import chat from "../../images/comment.png"
import {UilSetting} from "@iconscout/react-unicons"
import logoUt from "../../images/logout.png"
import search from '../../images/search.png'
import ShereModal from '../shereModal/ShereModal'
import { useInfoContext } from '../../context/Context'


export default function NavIcons() {
    const { setUser } = useInfoContext()
    const [ openModal, setOpenModal ] = useState(false)


  return (
    <div className='nav-icons'>
        <Link to="/home" >
            <img src={Home} alt="home_icon" />
        </Link>

        <Link to="/" className='nav_icon_setting' >
           <UilSetting  className="settings-nav" alt="settings_icon" />
        </Link>

        <Link to="/followers">
            <img src={search} alt="search_icon" />
        </Link>

        <Link to="/chat" >
            <img src={chat} alt="chat_icon" />
        </Link>

        <Link className='logoUt' to="/" onClick={ ()=> {
            localStorage.clear()
            setUser(null)}} >
            <img src={logoUt} alt="exit_icon" />
        </Link>

        <button className='r-button responsive-rbtn' onClick={()=> setOpenModal(true)}>
          Share
        </button>

        {/* shere Modal */}

        <ShereModal  openModal = {openModal} setOpenModal = {setOpenModal} /> 
    </div>
  )
}
