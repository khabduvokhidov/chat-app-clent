import React from 'react'
import { Link } from 'react-router-dom'
import { useInfoContext } from '../../context/Context'

import "./profileCard.css"

export default function ProfileCard({location}) {

  const {user, serverPublic, posts} = useInfoContext()

  return (
    <div className='profile-card'>
      <div className="profile-images">
        <img src={
          user?.coverPicture ? serverPublic + user?.coverPicture : serverPublic + "defaultCover.jpg"
        } alt="cover_profile" />

        <img width={80} height={80} src={
          user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"
        } alt="profile-photo" />
      </div>

      <div className="profile-name">
        <span> {user?.fristname} {user?.lastname} </span>
        <span> {user?.worksAt ? user?.worksAt : "write about yourself"} </span>
      </div>
      <div className="follow-status">
       <hr />
       <div>
        <div className='follow'>
          <span> {user?.followers?.length} </span>
          <span> Followers </span>
        </div>

        <div className='follow'>
          <span> {user?.following?.length} </span>
          <span> following </span>
        </div>
        {
          location === "profilePage" && (
            <>
              <div className="vl"></div>

              <div className="follow">
                <span> {
                  posts?.filter((post)=> post.userId === user._id).length
                  }
                </span>
                <span> Posts</span> 
              </div>
            </>
          )
        }
          </div>
         <hr />
        </div>
      {/* </div> */}
        {
        location === "profilePage" ? (
          ""
          ): (
            <span>
              <Link to={`/profile/${user._id}`} style={{textDecoration: "none", color: "inherit"}} >
                My profile
              </Link>
            </span>
          )
        }
    </div>
  )
}
