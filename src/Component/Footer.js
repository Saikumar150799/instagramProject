import React from 'react'
import storyData from './StoriesList'
import Story from './Story'

import 'tachyons'
import { Link } from "react-router-dom"
import '../App.css'
const Footer = () => {
  const home=()=>{
    document.querySelector('.menu').style.display='none'
    document.querySelector('.message').style.display='block'
  }
  
  
  return (
    <>

      <div className='footer'>
        <Link to="/">
          <i className="fa-solid fa-house grow" onClick={()=>home()}></i>
        </Link>
        <i className="fa-solid fa-magnifying-glass grow"></i>
        <img src="https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png" alt="" width="35px" />
        <i className="fa-regular fa-heart grow"></i>

        <Link to='/logIn'>
          <i className="fa-regular fa-user grow"></i>
        </Link>

      </div>
      <div className='side'>
        <h4>Suggestions For You</h4>
        {storyData.map((story) => {
          return (
            <div className='storyPerson'>
              <div className='stories grow'>
                <img src={story.image} alt={story.name} />
                <h5>{story.name}</h5>
              </div>
              <h5 className='side-follow'>Follow</h5>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default Footer