import { createContext, useContext, useEffect, useState } from "react";
const {getTimelinePosts} = require("../api/PostRequests")

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    
    const serverPublic = "https://chat-app-backend-1cbh.onrender.com/"


    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)

    const [loading, setLoading] = useState(false)

    const [postLoading, setPostLoading] = useState(false)

    const [modalOpened, setModalOpened] = useState(false)

    const [render, setRender] = useState(true)

    const [mobile, setMobile] = useState(false)

    const [posts, setPosts] = useState([])

    // get posts
    useEffect(()=> {
        ;(async()=> {
            const {data} = await getTimelinePosts(user?._id)
            setPosts(data)
        })()
    }, [user, postLoading])

    
    const value = {
        user,
        setUser,
        serverPublic,
        loading,
        setLoading,
        posts,
        setPosts,
        postLoading, 
        setPostLoading,
        modalOpened,
        setModalOpened,
        render, 
        setRender,
        mobile, 
        setMobile
    }

    return (
        <InfoContext.Provider value={value}>
            <InfoContext.Consumer>
                {
                    ()=>children
                }
            </InfoContext.Consumer>
        </InfoContext.Provider>
    )
}