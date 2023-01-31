import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearc from '../LogoSearc/LogoSearc'
import ProfileCard from '../ProfileCard/ProfileCard'

import "./profileSide.css"

export default function ProfileSide() {
  
  return (
    <div className='profile-side'>
        {/* Searc */}
          <LogoSearc />
        {/* Searc */}

        {/* Profile card */}
          <ProfileCard location={"homepage"} />
        {/* Profile card */}

        {/* followers card */}
          <FollowersCard />
        {/* followers card */}

    </div>
  )
}
