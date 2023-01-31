import React from 'react'
// import { getUsers } from '../../api/UserRequests'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
// import { useInfoContext } from '../../context/Context'


import "./profile.css"

export const Profile = () => {

  // const {user} = useInfoContext()

  // const [persons, setPersons] = useState([])

  // useEffect(() => {
  //   const fetchUsers = async () => {

  //     const {data} = await getUsers()
  //     setPersons(data)
  //   }
  //   fetchUsers()
  // }, []);

  return (
    <div className='profile'>
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard location={"profilePage"}/>
        <PostSide />
        
      </div>
      <RightSide />
    </div>
  )
}