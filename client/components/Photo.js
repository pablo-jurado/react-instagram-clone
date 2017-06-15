import React from 'react'
import { Link } from 'react-router'

function Photo (post, i) {
  return (
    <figure key={i} className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/view/${post.code}`}>
          {post.caption}
        </Link>
      </div>
    </figure>
  )
}

export default Photo
