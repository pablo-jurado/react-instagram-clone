// reducers takes as arguments a copy of current sate and a action
// we are pre setting the state as an empty array

function posts (state = [], action) {
  console.log(state, action)
  return state
}

export default posts
