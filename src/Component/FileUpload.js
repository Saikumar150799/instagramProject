import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { upload } from '@testing-library/user-event/dist/upload'
import { useSelector } from 'react-redux'


const FileUpload = (e) => {

    const navigate = useNavigate()
    const userId = useSelector((state) => state.loggedUser.posts)

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')


    // POSTING IMAGE
    const sendImage = async () => {

        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', "gnr3mc4k")

        if (userId != "") {
            // PUSHING IMAGE TO CLOUDINARY
            axios.post('https://api.cloudinary.com/v1_1/dgsmksi1t/image/upload', data)
                .then((res) => {
                    const imageURL = res.data.secure_url
                    // POSTING IMAGE TO DATABASE
                    const URL = axios.post("https://instagram-react-project.herokuapp.com/posts", {
                        "user_id": userId[0].user_id,
                        "name": `${name}`,
                        "image_url": `${imageURL}`,
                        "caption": `${caption}`
                    })
                })
        }
        let uploadSuccess = document.querySelector('.uploadSuccess')
        uploadSuccess.classList.add('showUploadSuccess')

    }
    const cancelUploadPopUp = () => {
        let cancelUploadPopUp = document.querySelector('.sideBar')
        cancelUploadPopUp.classList.remove('showSideBar')
        document.querySelector('.overlay1').style.display = 'none'
    }

    return (
        <>

            <div className='uploadImageContainer'>
                <div className='overlay1'></div>
                <div className='sideBar'>
                    <h4 className="uploadSuccess">UPLOADED SUCCESSFULLY</h4>
                    <form onSubmit={(e) => {
                        e.preventDefault()

                    }}>
                        <div className='uploadImageContainer'>
                            <i className="fa-solid fa-xmark cancelUploadPopUp" onClick={cancelUploadPopUp}></i>
                            <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} required />
                            <input type="text" placeholder='Enter description' onChange={(e) => setCaption(e.target.value)} required />
                            <input class="form-control" type="file" id="formFile" name='myFile' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className='upload'>
                            <button onClick={sendImage}>UPLOAD</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default FileUpload