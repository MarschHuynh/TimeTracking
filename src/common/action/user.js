var login = (username,password) =>{
  return function(dispatch,getState){

    let { user } = getState()
    dispatch({
      type: 'LOG_IN_REQUEST',
      username,
      isLogging: true
    })

    fetch("https://tifl.dn.fiisoft.com/oauth/login",{
      }).then((response) =>{
      response.text().then((txt) => {

          var data = "username=" + username + "&" +"password=" + password

          console.log(data);

          var lnk = txt.match(/action=\"(.*)\" /)[1].trim()
          fetch(lnk, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Security-Policy': 'upgrade-insecure-requests'
            },
            body: data
          }).then((resp) => {
            console.log("ok");
            dispatch({
              type: 'LOAD_POSTS_SUCCESS',
              username,
              isLogIn: true,
              isLogging: false
            })
          }).catch((error)=>{
            console.log("fail 1");
            dispatch({
                    type: 'LOAD_POSTS_FAILURE',
                    error,
                    isLogging: false
            })
          })
      })
    }).catch((error)=>{
      console.log("fail 2");
      dispatch({
              type: 'LOAD_POSTS_FAILURE',
              error,
              isLogging: false
      })
    })

  }
}

export default  login
