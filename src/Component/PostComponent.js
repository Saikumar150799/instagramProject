import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import PostDetails from './PostDetails'

const PostComponent = () => {
    const posts = useSelector((post) => post.allPosts.posts)

    let renderPosts
    if (posts.length != 0) {
        renderPosts = posts.map((post) => {
            const {post_id , name, image_url, caption } = post
            
            return (
                <>
                    <PostDetails name={name} image_url={image_url} caption={caption} post_id={post_id}/>
                </>
            )
        })

    }
    return (
        <>
            {renderPosts}
        </>
    )
}

export default PostComponent