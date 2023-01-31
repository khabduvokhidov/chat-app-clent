import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInfoContext } from '../../context/Context'
import { login, signUp } from "../../api/AuthRequests"
import signUpimage from "../../images/logo.png"

import "./auth.css"


export default function Auth() {

    const initialState = {
        fristname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
    }

    const navigate = useNavigate()

    const [isSiginup, setisSiginup] = useState(false)

    const {setUser, loading, setLoading} = useInfoContext()

    const [data, setData] = useState(initialState)

    const [confirmPass, setConfirmPass] = useState(true)

    // sign Up
    const signUpUser = async() => {
        try {
            setLoading(true)
            const res = await signUp(data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('profile', JSON.stringify(res.data.newUser))
            setUser(res.data.newUser)
            navigate("/home")
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
            alert(error.response.data.message)
        }
    }
    // log In
    const loginUser = async() => {
       try {
            setLoading(true)
            const res = await login(data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('profile', JSON.stringify(res.data.user))
            setUser(res.data.user)
            navigate("/home")
            setLoading(false)
       } catch (error) {
            setLoading(false)
            console.log(error);
            alert(error.response.data.message)
       }
    }

    // handleInput
    const hendleInput = (e) => {
        setData({...data, [e.target.name] : e.target.value })
    }   
    // handleSubmitFrom
    const hendalSubmitForm = async (e) => {
        setConfirmPass(true)
        e.preventDefault()
        if(isSiginup){
            data.confirmpass === data.password ? signUpUser() : setConfirmPass(false)
        }else{
            loginUser()
        }
    }
    // reset form 
    const reserForm = () => {
        setData(initialState)
        setConfirmPass(confirmPass)
    }
    
  return (
    <div className='auth'>
        {/* left box */}
        <div className="auth-left">
            <img className='logo-img' src={signUpimage} alt="logo" />

            <div className="app-name">
                <h1>JS media</h1>
                <h5>Powered by Webstar academy</h5>
            </div>

        </div>

        
        {/* roight box */}
        <div className="auth-right">
            <form onSubmit={hendalSubmitForm} className="auth-form info-form">
                <h3> {isSiginup ? "Register" : "Login"} </h3>
                {isSiginup && (
                  <>
                    <div>
                        <input onChange={hendleInput} type="text" className="info-input" placeholder='Frist Name' name='fristname' value={data.fristname} required/>
                        
                    </div>

                    <div>
                        <input onChange={hendleInput} type="text" className="info-input" placeholder='Last Name' name='lastname' value={data.lastname} required/>
                    </div>
                  </>
                )}

                <div>
                    <input onChange={hendleInput} type="text" className="info-input" placeholder='User Name' name='username'
                    value={data.username} required/>
                </div>

                <div>
                    <input onChange={hendleInput} type="password" className="info-input" placeholder='Password' name='password' value={data.password} required/>
                </div>


                {isSiginup && (
                    <div>
                        <input onChange={hendleInput} type="password" className="info-input" placeholder='Confirm Password' name='confirmpass' value={data.confirmpass} required/>
                    </div>
                )}

                <div>
                    <span style={{display: confirmPass ? "none" : "block"}} className="confirm-span">
                        *confirm password is not same
                    </span>

                    <span className='info-span' onClick={ ()=> {
                        setisSiginup(!isSiginup)
                        reserForm()
                    }}>
                        {isSiginup ? "Already have an accound login" : "Don't have an accound Sign Up"}
                        
                    </span>

                    <button className="info-btn button" disabled={loading} >
                        {loading ? "loading..." : isSiginup ? "SignUp" : "Login"}
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}
