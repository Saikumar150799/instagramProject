import React from 'react'
import { useState } from 'react'
import { shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {


  const show =()=>{
    const logOutPopUp=document.querySelector('.sideBar')
    logOutPopUp.classList.add('showSideBar')
    document.querySelector('.overlay1').style.display='block'
  }

  const uploadFormPopUp=()=>{
    const logOutPopUp=document.querySelector('.sideBar')
    logOutPopUp.classList.add('showSideBar')
    document.querySelector('.overlay1').style.display='block'
  }
  
  
  return (
    <div className='Navigation'>
      <div>
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="instagramLogo" />
      </div>
      <div className='nav-side-icon'>
        <input type='text' placeholder='Search'></input>
        <label><i className="fa-solid fa-plus" onClick={uploadFormPopUp}></i></label>
        <i className="fa-brands fa-facebook-messenger message"></i>
        <i class="fa-solid fa-bars menu " style={{display:"none"}} onClick={()=>show()}></i>
      </div>
    </div>
  )
}

export default Header