import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'

import "./home.css"

export default function Home() {

  return (
    <>
      <div className='home'>
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>

      <div className="home-response">
        <div className='home_smile_response'> 
          <ProfileSide />
          <PostSide />
        </div>
        <RightSide />
      </div>
    </>
  )
}
