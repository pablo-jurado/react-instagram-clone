import React from 'react'
import Photo from './Photo'

function PhotoGrid (props) {
  return (
    <div className='photo-grid'>
      {props.posts.map((post, i) => Photo(post, props, i) )}
    </div>
  )
}

export default PhotoGrid
