import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearc from '../LogoSearc/LogoSearc'
import NavIcons from '../NvaIcons/NavIcons'

import "./searcUser.css"

export default function SearcUsers() {
  return (
    <section className='usersSearch'>
        <div className="userSearc_box">
            <div className="userSearc_box_nav">
                <LogoSearc />
                <NavIcons />
            </div>

            <div className="userSearc_box_body">
                <FollowersCard />
            </div>
        </div>
    </section>
  )
}
