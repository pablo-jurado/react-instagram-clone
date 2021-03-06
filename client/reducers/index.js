import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers only exports one file so we are going to import all our reducres
import posts from './posts'
import comments from './comments'

// router keeps track of our URL changes so we combine that with the reducers
const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer
