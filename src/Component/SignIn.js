import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { loggedUsers , loggedIn, setActiveUser } from '../redux/actions/instagramAction'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const SignIn = () => {

  const [logged,setLogged]=useState(false)

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logIn = async () => {

    dispatch(loggedIn(true))


    // fetch all users
    const URL = await axios.get('https://instagram-react-project.herokuapp.com/users')
      .then((URL) => {
        const usersInfo = URL.data
        usersInfo.map((user) => {
          const {user_id,name, email, password } = user

          // console.log(user,email,password)

          if (userEmail === email) {
            if (userPassword === password) {
              dispatch(loggedUsers(user))
              navigate('/')
              activeUser(user_id,name)
              


            } else {
              navigate('/signUp')
            }
          } 

          const message=document.querySelector('.message')
          message.style.display='none'
          const menu=document.querySelector('.menu').style.display='block'
         
        })
      }).catch((err) => {
        console.log(err)
      })
  }
 
  const activeUser=async(user_id,userName)=>{
    const URL=await axios.put(`https://instagram-react-project.herokuapp.com/users/${user_id}`,{
      "avatar":"https://winterhugs.in/wp-content/uploads/2021/06/avatar-3.jpg",
      "name":`${userName}`,
      "active":0
    }).catch((err)=>console.log(err))
  }
  

  return (
    <div className='signIn'>
      <div className='signUp'>
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="instagramLogo" width='100px' />

        <form onSubmit={(e) => {
          e.preventDefault()
          logIn()
        }}>
          <div className='signUpFeild'>
            <input type="email" placeholder='Email address' onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required />
            <input type="password" placeholder='Password' onChange={(e) => setUserPassword(e.target.value)} value={userPassword} required />
            <button type='submit' className='grow'>Log In</button>
          </div>

        </form>
        <div className='loginFB'>
          <i class="fa-brands fa-facebook-square"></i>
          <h4>Log in with Facebook</h4>
        </div>
        <p className='forgetPS'>Forget password?</p>
        <div className='signUpFooter'>
          <p>Don't have an account?</p>
          <Link to='/signUp'>
            <h4 className='grow'>Sign UP</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn