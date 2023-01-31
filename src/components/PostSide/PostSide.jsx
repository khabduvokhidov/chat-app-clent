import React from 'react'
import { Posts } from '../Posts/Posts'
import {PostShare} from '../PostShare/PostShare'

import "./postSide.css"

export default function PostSide() {
  return (
    <div className='post-side'>
        <PostShare />
        <Posts />
    </div>
  )
}
