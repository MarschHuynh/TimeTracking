initUser = {
  isLogIn: false,
  username: 'guest',
  token: null,
  email: null
}

export default user = (state=initUser,action) =>{
  switch (action.type) {
    case 'LOGIN':
      return {
        logIn: true,
        username: action.username,
        token
      }
    default:
      return initUser
  }
}
