import React, {useState, useEffect} from 'react'
import {getUsers} from "../../api/UserRequests"
import { useInfoContext } from '../../context/Context'
import User from '../user/User'

import "./followersCard.css"

export default function FollowersCard() {

  const [persons, setPersons] = useState([])

  const {user} = useInfoContext()

  useEffect(() => {
    const fetchUsers = async () => {

      const {data} = await getUsers()
      setPersons(data)
    }
    fetchUsers()
  }, []);

  return (
    <div className='followers-card'>
      <h3>People you may know</h3>
      {
        persons.map((person, id) => {
          if(person._id !== user._id){
            return <User person = {person} key={id} />
          }
        })
      }
    </div>
  )
}
