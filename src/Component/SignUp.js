import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import { useState } from 'react'


const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const addUser = async () => {
        const URL = await axios.post("https://instagram-react-project.herokuapp.com/users", {
            "name": `${userName}`,
            "email": `${Email}`,
            "password": `${Password}`
        })
            .then((res) => {
                const popUp = document.querySelector('.popUp')
                const overlay = document.querySelector('.overlay')
                overlay.classList.add('showOverlay')
                popUp.classList.add('showPopUp')


            })
            .catch((err) => console.log(err))

    }
    return (
        <div className='signUp'>
            <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="instagramLogo" width='100px' />
            <h3>Sign up to see photos and videos from your friends.</h3>
            <div className='loginFB'>
                <i class="fa-brands fa-facebook-square"></i>
                <h4>Log in with Facebook</h4>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                addUser()
            }}>
                <div className='signUpFeild'>
                    <input type="name" placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={userName} required />
                    <input type="email" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} value={Email} required />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={Password} required />
                    <button type='submit' className='grow'>Sign Up</button>
                </div>
            </form>
            <div className='signUpFooter'>
                <p>Have an account?</p>
                <Link to='/logIn'>
                    <h4 className='grow'>Log in</h4>
                </Link>
            </div>
            <div className='overlay'></div>
            <div className='popUp'>
                <div className='cancelPopUp'>
                    <h5>
                    <Link to='/logIn'>
                    <i class="fa-solid fa-xmark"></i>
                    </Link>
                        
                    </h5>
                </div>
                <p><i>{userName}</i> account created successfully <i class="fa-regular fa-circle-check" style={{ color: "green" }}></i> </p>
            </div>
        </div>
    )
}

export default SignUp