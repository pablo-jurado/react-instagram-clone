import React from 'react'
import { Link } from 'react-router'

function Main (props) {
  return (
    <div>
      <h1>
        <Link to='/' >Instaclone</Link>
      </h1>
      {React.cloneElement(props.children)}
    </div>
  )
}

export default Main
