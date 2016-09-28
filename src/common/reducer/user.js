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
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLogging: true
      }
    case 'LOAD_POSTS_SUCCESS':
      return {
        ...state,
        isLogedIn: true,
        isLogging: false
      }
    case 'LOAD_POSTS_FAILURE':
      return {
        ...state,
        isLogedIn: false,
        isLogging: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogedIn: false,
      }
    default:
      return initUser
  }
}

export default user
