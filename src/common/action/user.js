// var CookieManager = require('react-native-cookies');
var login = (username,password) =>{
  return function(dispatch,getState){

    let { user } = getState()
    dispatch({
      type: 'LOG_IN_REQUEST',
      username,
      loginStatus: 1,
    })

    fetch("https://tifl.dn.fiisoft.com/oauth/login",{
    // fetch("https://tifl.dn.fiisoft.com/auth/",{
        mode: 'cors',
        headers:{
          // 'Access-Control-Allow-Origin' : '*'
        }
      }).then((response) => {
        console.log("RES",response);
        response.text().then((txt) => {

            var data = "username=" + username + "&" +"password=" + password
            var lnk = "https://google.com"
            try {
              lnk = txt.match(/action=\"(.*)\" /)[1].trim()
            } catch(e){
              dispatch({
                  type: 'LOG_IN_FAILURE',
                  error: 'An error occured.Please try again.',
                  loginStatus: 0,
              })
            }
            fetch(lnk, {
              // mode: 'cors',
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Security-Policy': 'upgrade-insecure-requests'
              },
              body: data
            }).then((resp) => {
              resp.text().then((data)=>{
                // Check Invalid username and password
                var fail = data.match('Invalid username or password')
                if (!fail){
                  dispatch({
                    type: 'LOG_IN_SUCCESS',
                    username,
                    loginStatus: 2,
                  })
                } else {
                  console.log("Successful");
                  dispatch({
                      type: 'LOG_IN_SUCCESS',
                      error: 'Invalid username or password',
                      loginStatus: 0,
                  })
                }
              })
            }).catch((error)=>{

              // CookieManager.get('https://tifl.dn.fiisoft.com/ui/', (err, res) => {
              //   if (err){
              //     dispatch({
              //         type: 'LOG_IN_FAILURE',
              //         error: 'Please check your network anh try again.',
              //         loginStatus: 0,
              //     })
              //   } else {
              //     console.log(res.sessionid);
              //     dispatch({
              //         type: 'LOG_IN_SUCCESS',
              //         username,
              //         sessionid: res.sessionid,
              //         loginStatus: 0,
              //     })
              //   }
              // })


              console.log("Fail but not fail",error);

              dispatch({
                  type: 'LOAD_POSTS_SUCCESS',
                  username,
                  loginStatus: 0,
              })
            })
        })
      }).catch((error)=>{
        console.log("Fail 2",error);
        dispatch({
            type: 'LOG_IN_FAILURE',
            error: 'Please check your network anh try again.',
            loginStatus: 0,
        })
      })
  }
}

var logout = () => {
  return {
    type: 'LOGOUT',
  }
}

var resetError = () => {
  return {
    type: 'RESET_ERROR',
  }
}

export {
  login,
  logout,
  resetError
}
