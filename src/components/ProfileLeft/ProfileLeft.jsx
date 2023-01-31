import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import { InfoCard } from '../InfoCard/InfoCard'
import LogoSearc from '../LogoSearc/LogoSearc'

import "./ProfileLeft.css"

export default function ProfileLeft() {
  return (
    <div className='profile-side'>
      <LogoSearc />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}
