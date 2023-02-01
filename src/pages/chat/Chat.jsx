import React, { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import { userChats } from '../../api/ChatRequests'
import { ChatBox } from '../../components/ChatBox/ChatBox'
import { Conversation } from '../../components/Conversation/Conversation'
import { useInfoContext } from '../../context/Context'
import LogoSearch from "../../components/LogoSearc/LogoSearc"
import NavIcons  from '../../components/NvaIcons/NavIcons'

import "./chat.css"

export const Chat = () => {
  const socket = useRef()
  const {user, render, mobile, setMobile} = useInfoContext()
  const [chats, setChats] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [sendMessage, setSendMessage] = useState(null)
  const [receivedMessage, setReceivedMessage] = useState(null)


  // Get the chat in the sections
  useEffect(()=> {
    const getChats = async () => {
      try {
        const {data} = await userChats()
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    }

    getChats()
  }, [user?._id, render])

  // connect to socket.io
  useEffect(()=> {
    socket.current = io("https://hat-app-socket.onrender.com")

    socket.current.emit("new-user-add", user._id)

    socket.current.on("get-users", (users)=> {
      setOnlineUsers(users)
    })

  }, [user])

  // send message to socket server
  useEffect(() => {
    if(sendMessage !== null) {
      socket.current.emit("send-message", sendMessage)
    }
  }, [sendMessage])

  // Get the message from socket server 
  useEffect(()=> {
    socket.current.on('recieve-message', (data) => {
      setReceivedMessage(data)
    })
  }, [])

  const checkOlineStatus = (chat) => {
    const chatMember = chat.members.find((member)=> member !== user._id)

    const online = onlineUsers.find((user)=> user.userId === chatMember)

    return online ? true : false
  }
  return (
    <div className='chat'>
      {/* left side */}
      <div className={mobile ? "left-side-chat_none" : "left-side-chat"}>
        <LogoSearch />

        <div className={mobile ? "chat-list_mobile" : "chat-container"}>
          <div className="chat_nav_text">
            <h2>Chats</h2>
            <h3> {user?.fristname} </h3>
          </div>
          <hr />
          <div className={"chat-list"}>
            {
              chats.map((chat, i) => {
                return(
                  <div key={i} onClick={()=>setCurrentChat(chat)}>
                    <div onClick={()=> setMobile(!mobile)} >
                      <Conversation data={chat} currentUser={user._id} online={checkOlineStatus(chat)} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* right side */}
      <div  className={mobile ? "right-side-chat_none" : "right-side-chat"}>
        <div className='NavIcon_diplay_none' style={{width: "20rem", alignSelf: "flex-end"}}>
          <NavIcons />
        </div>
        <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} receivedMessage={receivedMessage}/>
      </div>
    </div>
  )
}