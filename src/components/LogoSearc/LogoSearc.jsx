import React from 'react'
import Logo from "../../images/logo.png"

import {UilSearch} from "@iconscout/react-unicons"

import "./logoSearc.css"

export default function LogoSearc() {
  return (
    <div className='logo-search'>
      <img src={Logo} alt="logo" />
      <div className="search">
        <input type="text" placeholder='Search...' />
        <div className="search-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}
