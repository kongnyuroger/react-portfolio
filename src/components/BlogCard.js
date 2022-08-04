import React from 'react'
import './BlogCard.css'

function BlogCard({title, year, type}) {
  return (
    <div className='blog-card'>
        <div className='blog-card__text-box'>
            <h1>{title}</h1>
            <div className='spans'>
                <span className='span-1'>{year}</span>
                <span className='span-2'>{type}</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    </div>
  )
}

export default BlogCard