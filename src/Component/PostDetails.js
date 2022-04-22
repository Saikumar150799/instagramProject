import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import FileUpload from './FileUpload'
import 'tachyons'
import { Route } from 'react-router-dom'

const PostDetails = (props) => {
    const allPosts = useSelector((state) => state.allPosts.posts)
    // console.log(".............",allPosts)


    const [isLike, setIsLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [commentText, setCommentText] = useState('')
    const [commentList, setCommentList] = useState([])


    
    const userProfile = useSelector((state) => state.activeUser.posts[0])
    // const {name}=userProfile
    

    function addComment() {
        !comment ? setComment(true) : setComment(false)
    }

    // POST COMMENT
    const sendComment = () => {
        setCommentList((prevComment) => {
            return [...prevComment, commentText]
        })

        const URL = axios.post(`https://instagram-react-project.herokuapp.com/posts/${props.post_id}/comments`, {
            "post_id": `${props.post_id}`,
            "description": `${commentText}`
        })
            .then((res) => console.log('done'))
            .catch((err) => console.log(err))
    }

    // GETTING COMMENT
    useEffect(() => {
        async function getComment() {
            let URL = await fetch(`https://instagram-react-project.herokuapp.com/posts/${props.post_id}/comments`, {
                method: 'GET',
            })
            return URL.json()
        }
        getComment().then((comment) => {
            let commentsArray = []
            comment.forEach((comm) => {
                commentsArray.push(comm.description)
            })
            setCommentList(commentsArray)
        })

    })


    return (
        <div className='post-container'>
            <div className='all-posts'>
                <div className='storyPerson'>
                    <div className='stories'>
                        <img src={props.image_url} alt={props.name} />
                        <h5>{props.name}</h5>
                    </div>
                    <div className='dots'>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>

             
                <FileUpload />

                <div className='postImage'>
                    <img src={props.image_url} alt={props.name} />

                    {/* LIKE COMMENT SHARE */}
                    <div className='media'>
                        <div className='icons'>
                            {isLike ? <i class="fa-solid fa-heart grow" style={{ color: '#e74c3c' }} onClick={() => setIsLike(false)}></i> : <i className="fa-regular fa-heart" onClick={() => setIsLike(true)}></i>}
                            <i class="fa-regular fa-comment" onClick={addComment}></i>
                            <i class="fa-regular fa-paper-plane"></i>
                        </div>
                        <div className='bookmark'>
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>

                    {/* STORING COMMET */}
                    <ol className='comment'>
                        {commentList.map((comment) => {
                            return <li style={{ color: "white" }}> <b> </b> {comment}</li>
                        })}
                    </ol>

                    {/* COMMENT */}
                    {comment ? <div className='comment'>
                        <input type="text" placeholder='Add a comment...' onChange={(e) => setCommentText(e.target.value)} />
                        <button onClick={() => sendComment()}>Post</button>
                    </div> : null}

                    {/* CAPTION */}
                    <div className='caption'>
                        <h4>{props.name}</h4>
                        <p>{props.caption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails