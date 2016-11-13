// state argument is not application state, only the state
//this reducer is responsible for
//ES6 syntax state = null, if it is defined, set it to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
