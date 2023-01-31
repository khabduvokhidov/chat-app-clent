import { createContext, useContext, useEffect, useState } from "react";
const {getTimelinePosts} = require("../api/PostRequests")

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    
    const serverPublic = "http://localhost:4000/"


    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)

    const [loading, setLoading] = useState(false)

    const [postLoading, setPostLoading] = useState(false)

    const [modalOpened, setModalOpened] = useState(false)

    const [render, setRender] = useState(true)

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
        setRender
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