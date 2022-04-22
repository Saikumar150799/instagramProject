import React from 'react'
import '../App.css'
import storyData from './StoriesList'

const story = () => {
  return (
    <div className='story'>
      {storyData.map((story) => {
        return (
          <div className='storyPerson'>
            <div className='stories'>
              <img src={story.image} alt={story.name} />
              <h5>{story.name}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default story