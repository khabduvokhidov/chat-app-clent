import React, { useRef, useState } from 'react'
import { useInfoContext } from '../../context/Context'
import { uploadImage } from '../../api/UploadRequest'
import { getUser, updateUser } from '../../api/UserRequests'
import { UilScenery } from "@iconscout/react-unicons";

import "./SettingCard.css"

export default function SettingCard() {

  const {user, setUser, loading, setLoadin} = useInfoContext()
  const {password, ...other} = user  
  const [formData, setformData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)

  const imageRef = useRef();

  const handleChange = (e)=> {
    setformData({...formData, [e.target.name]: e.target.value})
  }

  const onImageChange = (e)=> {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      e.target.name === 'profileImage' ? setProfileImage(img) : setCoverImage(img)
    }
  }

  // for submission
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let userData = formData
    if(profileImage) {
      const data = new FormData()
      data.append('image', profileImage)
      try {
        let res = await uploadImage(data)
        userData.profilePicture = res.data
      } catch (error) {
        console.log(error);
      }
    } 
    if(coverImage) {
      const data = new FormData()
      data.append('image', coverImage)
      try {
        let res = await uploadImage(data)
        userData.coverPicture = res.data
      } catch (error) {
        console.log(error);
      }
    }

    await updateUser(user._id, userData)
    const {data} = await getUser(user._id)
    setUser(data)
    localStorage.setItem('profile', JSON.stringify(data))
  }

  return (
    <div className="updateProfile">
        <form onSubmit={handleSubmit}  className="info-update-form">
            <h3>Your Info</h3>

            <div className='UpdateProfile_input fx'>
                <div className='UpdateProfile_input_option' style={{ color: "var(--video)" }} onClick={() => imageRef.current.click()}>
                    <UilScenery />
                    Update Profile Image
                </div>

                <div className='UpdateProfile_input_option' style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                    Update Cover Image
                    <UilScenery />
                </div>
            </div>

            <div style={{display: "none"}} className='UpdateProfile_input'>
                Profile Image
                <input ref={imageRef} type="file" name='profileImage' onChange={onImageChange}/>

                Cover Image
                <input ref={imageRef} type="file" name='coverImage' onChange={onImageChange}/>
            </div>

            <div className='UpdateProfile_input'>
                <input onChange={handleChange} type="text" name='firstname' value={formData.firstname} className="info-input updateInput" placeholder='First Name'/>

                <input onChange={handleChange} type="text" name='lastname' value={formData.lastname} className="info-input updateInput" placeholder='Last Name'/>
            </div>

            <div className='UpdateProfile_input_texts'>
                <input onChange={handleChange} type="text" name='worksAt' value={formData.worksAt} className="info-input updateInput" placeholder='Works At'/>
            </div>

            <div className='UpdateProfile_input'>
                <input onChange={handleChange} type="text" name='livesIn' value={formData.livesIn} className="info-input updateInput" placeholder='WLives In'/>

                <input onChange={handleChange} type="text" name='country' value={formData.country} className="info-input updateInput" placeholder='Country'/>
            </div>

            <div className='UpdateProfile_input_texts'>
                <input onChange={handleChange} type="text" name='relationship' value={formData.relationship} className="info-input updateInput" placeholder='Relationship'/>
            </div>

            <button className="button info-btn" type='submit' disabled={loading}>
                {loading ? "loading..." : "Update"}
            </button>

      </form>
    </div>
  )
}
