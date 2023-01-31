import React, { useState, useEffect }  from 'react'
import { useInfoContext } from '../../context/Context'
import { getUser } from "../../api/UserRequests"
import { deleteChat } from '../../api/ChatRequests'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export const Conversation = ({data, currentUser, online}) => {
  const { serverPublic, loading, setLoading, render, setRender} = useInfoContext()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const userId = data.members.find(id => id!==currentUser)

    const getUserData = async () => {
      try {
        const {data} = await getUser(userId)
        setUserData(data)
      } catch (error) {
        console.log(error);
      }
    }
    
    getUserData()
  }, [])

  const delChat = async() => {
    try {
      setLoading(true)
      const res = await deleteChat(data?._id)
      toast.success(res.data)
      await setRender(!render)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  return (
    <>
    <div className='follower converstation'>
        <div>
          {
            online && 
            <div className='online-dot'></div>
          }
          <img 
            className='followerImage' 
            src={
              userData?.profileImage ? serverPublic + userData.profileImage : serverPublic+ "defaultProfile.png"} 
            alt="profile" style={{width: "50px", height: "50px" }}
            />
            <div className='name' style={{fontSize: "8px"}}>
              <span> {userData?.fristname} {userData?.lastname} </span>
              <span style={{color: online ? "#51e200" : "000"}}> {online ? "online" : "offline"} </span>
            </div>
        </div>
        <button className="del-btn" id={data._id} onClick={delChat}>{ loading ? "loading" : "delete" }</button>
    </div>
    <hr />
    <ToastContainer />
    </>
  )
}
