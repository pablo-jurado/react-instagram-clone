import React from 'react'
import { Link } from 'react-router'

function Main (props) {
  console.log(props.children)
  return (
    <div>
      <h1>
        <Link to='/' >Clonestagram</Link>
      </h1>
      {React.cloneElement(props.children, props)}
    </div>
  )
}

export default Main
