import React, { useState } from 'react'
import { useInfoContext } from '../../context/Context'
import Comment from "../../images/comment.png"
import Share from "../../images/share.png"
import Heart from "../../images/like.png"
import NotLike from "../../images/notlike.png"
import { likePost } from '../../api/PostRequests'

import "./post.css"

export const Post = ({data}) => {
  const {serverPublic, user} = useInfoContext()
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)
  // console.log(data);
  const handleLike = () => {
    likePost(data._id, user._id)
    setLiked(prev => !prev)
    liked ? setLikes(prev => prev-1) : setLikes(prev => prev+1)
  }
  return (
    <div className='Post'>
      {
        data?.image && <img src={serverPublic + data?.image} alt="post_image" />
      }
      
      <div className="post-react">
        <img src={liked ? Heart : NotLike} alt="like_icon" style={{cursor: "pointer"}} onClick={handleLike}/>
        <img src={Comment} alt="comment_icon" />
        <img src={Share} alt="share_icon" />
      </div>

      <span style={{color:"var--gray", fontSize: "12px"}}>{likes} likes</span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span>
          <b>{data.desc}</b>
        </span>
      </div>
    </div>
  )
}