import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import '../App.css'
import Story from './Story'
import { loggedUsers, setPosts,setActiveUser } from '../redux/actions/instagramAction'
import PostComponent from './PostComponent'

const Posts = () => {
  const posts = useSelector((post) => post)
  const dispatch = useDispatch()

  const fetchPosts = async () => {
    const URL = await axios.get('https://instagram-react-project.herokuapp.com/posts')
      .catch((err) => {
        console.log(err)
      })
    dispatch(setPosts(URL.data))
  }

  const getAllUsers = async () => {
    const URL = await axios.get('https://instagram-react-project.herokuapp.com/users')
      .catch((err) => {
        console.log(err)
      })
    dispatch(loggedUsers(URL.data))
    console.log(URL.data)
  }

  useEffect(() => {
    fetchPosts()
    getAllUsers()
    getActiveUser()
  }, [])

  const getActiveUser = async () => {
    const URL = await axios.get('https://instagram-react-project.herokuapp.com/users/active/0')
      .catch((err) => console.log(err))
    dispatch(setActiveUser(URL.data))

  }
 

  return (
    <div className='Posts'>
      <Story />
      <PostComponent />
    </div>
  )
}

export default Posts