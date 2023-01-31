import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { followUser, getUser, unfollowUser } from '../../api/UserRequests'
import chat from "../../images/comment.png"
import { useInfoContext } from '../../context/Context'
import { userAddChat, userChats } from '../../api/ChatRequests'

export default function User({person}) {

    const navigate = useNavigate()

    const {user, setUser, serverPublic, setLoading,} = useInfoContext()
    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
    )

    const hendelChaat = async(e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const data = new FormData()
            data.append("senderId", user._id)
            data.append("receviedId", person._id)
            const res = await userAddChat(data)
            console.log(res);
            setLoading(false)
            navigate("/chat")
        } catch (error) {
            console.log(error);
        }
    }

    const handleFollow = async () => {
        setFollowing((prev)=> !prev) 
        following 
        ? (await unfollowUser(person._id, user))
        : (await followUser(person._id, user))

        const {data} = await getUser(user._id)
        setUser(data)
        
        localStorage.setItem("profile", JSON.stringify(data))

    }

  return (
    <Link to="#" className='follower'>
        
        <div>
            <img src={
                person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"
            } alt="profile" className='followerImage' />

            <div className="name">
                <span> {person.fristname} </span>
                <span> @{person.username} </span>
            </div>

        </div>

        <div className="follewr_btn_box">
            <button onClick={handleFollow} className={following ? "button fc-button unfollowButton" : "button fc-button"}> 
                {
                    following ? "Unfollow" : "follow"
                }
            </button>

            <button onClick={hendelChaat} className='follower_link_chat' to="#" >
                <img className='chat_image' src={chat} alt="" />
            </button>
        </div>


    </Link>
  )
}
