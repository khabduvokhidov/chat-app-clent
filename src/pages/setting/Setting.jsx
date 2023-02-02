import React from 'react'
import { Link, } from 'react-router-dom'
import NavIcons from '../../components/NvaIcons/NavIcons'
import SettingCard from '../../components/settingCard/SettingCard'

import "./Setting.css"

export default function Setting() {
  return (
    <section className="settings-section">
        <div className="setiing-nav">
            <NavIcons />
        </div>

        <div className="setting-box">
            <div className="setting-smile_box">
                <ul className="setting-list">
                    <li className="setting-iteam actve">
                        <Link className='setting-link' to="#"> Update Accound </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Change Password </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Advertising </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Control </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Email Notifications </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Application and sites </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Push-Notifications </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Contact management </Link>
                    </li>

                    <li disabled className="setting-iteam">
                        <Link className='setting-link' to="#"> Help </Link>
                    </li>

                </ul>
            </div>

            <div className="setting-update_box">
                <SettingCard /> 
            </div>
        </div>
    </section>
  )
}
