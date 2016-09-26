logInRequest = (username,password) =>{
  return {
    type: 'LOG_IN_REQUEST'
    username,
    password
  }
}

logInFail = (username,error) =>{
  return {
    type: 'LOG_IN_FAIL'
    username,
    error,
    isLogin: false
  }
}

logInSuccess = (username,error) =>{
  return {
    type: 'LOG_IN_SUCCESS'
    username,
    token,
    isLogin: true
  }
}
