import React from 'react'
import { useSelector } from 'react-redux'
import { loggedUsers, loggedIn, setActiveUser } from '../redux/actions/instagramAction'
import { useDispatch } from 'react-redux'
import '../App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const cancelUploadPopUp = () => {
        let cancelUploadPopUp = document.querySelector('.sideBar')
        cancelUploadPopUp.classList.remove('showSideBar')
        document.querySelector('.overlay1').style.display = 'none'
    }

    // SHOW LOGGED USER
    const getActiveUser = async () => {
        const URL = await axios.get('https://instagram-react-project.herokuapp.com/users/active/0')
            .catch((err) => console.log(err))
        dispatch(setActiveUser(URL.data))

    }
    useEffect(() => {
        getActiveUser()

    }, [])

    const userProfile = useSelector((state) => state.activeUser.posts[0])
    let name
    let avatar
    let user_id


    if (userProfile != undefined) {
        name = userProfile.name
        avatar = userProfile.avatar
        user_id = userProfile.user
    }

    console.log('user_id', userProfile)

    const updateActiveUser = async () => {

        await axios.put(`https://instagram-react-project.herokuapp.com/users/${userProfile.user_id}`, {
            "avatar": `${avatar}`,
            "name": `${name}`,
            "active": 1
        }).catch((err) => console.log(err))
    }

    const logOut = () => {
        dispatch(loggedIn(false))
        navigate('/signUp')
        updateActiveUser()

    }
    return (
        <div className='profile'>
            <div className='profile-information'>
                <div className='storyPerson'>
                    <div className='stories'>
                        <img src={avatar} width='100px' alt={name} />
                        <h5>{name}</h5>
                    </div>
                </div>
                <div className='followers'>
                    <div className='postsCount'>
                        <h5>875</h5>
                        <h5>Posts</h5>
                    </div>
                    <div className='followersCount'>
                        <h5>598</h5>
                        <h5>followers</h5>
                    </div>
                    <div className='followingCount'>
                        <h5>1,583</h5>
                        <h5>following</h5>
                    </div>
                </div>
            </div>



            <div className='icon'>
                <i class="fa-solid fa-table-cells"></i>
                <i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-id-card-clip"></i>
            </div>
            <div className='overlay1'></div>
            <div className='sideBar'>
                <ul>
                    <i className="fa-solid fa-xmark cancelUploadPopUp" onClick={cancelUploadPopUp}></i>
                    <li><i class="fa-solid fa-gear"></i> <h3>Setting</h3></li>
                    <li><i class="fa-solid fa-clock-rotate-left"></i><h3> Archive</h3></li>
                    <li><i class="fa-solid fa-qrcode"></i><h3>QR code</h3></li>
                    <li><i class="fa-regular fa-bookmark"></i><h3>Bookmark</h3></li>
                    <li><i class="fa-regular fa-star"></i><h3>Favourites</h3></li>
                    <h3 className='logout' onClick={logOut}>Log Out</h3>

                </ul>
            </div>

        </div>
    )
}

export default Profile