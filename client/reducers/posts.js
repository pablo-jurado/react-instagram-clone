// reducers takes as arguments a copy of current sate and a action
// we are pre setting the state as an empty array

function posts (state = [], action) {
  console.log(state, action)

  if (action.type === 'INCREMENT_LIKES') {
    console.log('likes!!!')
    console.log(state)
    const i = action.index;
    return [
             ...state.slice(0, i),
             {...state[i],  likes: state[i].likes + 1 },
             ...state.slice(i + 1)
           ]
  }
  return state
}

export default posts



// function posts (state = [], action) {
//   console.log(state, action)
//
//   if (action.type === 'INCREMENT_LIKES') {
//     console.log('likes!!!')
//     const i = action.index;
//       return [
//         ...state.slice(0, i),
//         {...state[i],  likes: state[i].likes + 1 },
//         ...state.slice(i + 1)
//       ]
//   }
//   return state
// }
//
// export default posts
