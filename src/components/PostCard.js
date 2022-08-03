import React from 'react'
import './PostCard.css'

function PostCard({hearding, date, type}) {
  return (
    <div className='postcard'>
        <h1>{hearding}</h1>
        <div className='postcard__spans'>
            <span>{date}</span>
            <span>|</span>
            <span>{type}</span>
        </div>
        <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

    </div>
  )
}

export default PostCard