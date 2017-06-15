import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

function Photo (post, props, i) {
  return (
    <figure key={i} className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} />
        </Link>
        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={post.likes} className="likes-heart">{post.likes}</span>
        </CSSTransitionGroup>
      </div>

      <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={props.increment.bind(null,i)} className="likes">&hearts; {post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble"></span> {(props.comments[post.code] ? props.comments[post.code].length : 0)}
              </span>
            </Link>
          </div>
        </figcaption>
    </figure>
  )
}

export default Photo