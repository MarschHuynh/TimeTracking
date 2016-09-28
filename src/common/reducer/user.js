var initUser = {
  isLogedIn: false,
  username: 'guest',
  token: null,
  email: null,
  isLogging: false,
  error: null
}

const user = (state = initUser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        logIn: true,
        username: action.username,
        token
      }
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLogging: true
      }
    case 'LOAD_POSTS_SUCCESS':
      return {
        ...state,
        isLogging: false
      }
    case 'LOAD_POSTS_SUCCESS':
      return {
        ...state,
        isLogging: false
      }
    default:
      return initUser
  }
}

export default user
