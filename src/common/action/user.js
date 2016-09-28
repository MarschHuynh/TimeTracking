var login = (username,password) =>{
  return function(dispatch,getState){

    let { user } = getState()
    dispatch({
      type: 'LOG_IN_REQUEST',
      username,
      isLogging: true
    })
    // fetch("https://google.com",{

    fetch("https://tifl.dn.fiisoft.com/oauth/login",{
        mode: 'cors',
        headers:{
          'Thien' : 'ok'
        }
      }).then((response) =>{
        console.log("RESP",response);

        // response.blob().then((data)=>{
        //   console.log("Blob",data);
        // })

        response.text().then((txt) => {

            // console.log("txt",txt);
            var data = "username=" + username + "&" +"password=" + password

            console.log(data);
            var lnk
            try {
              console.log("Link",lnk);
            } catch (error) {
              dispatch({
                  type: 'LOAD_POSTS_FAILURE',
                  error: 'Can\'t get link',
                  isLogging: false
              })
            }

            lnk = txt.match(/action=\"(.*)\" /)[1].trim()
            console.log("Link 2",lnk);
            fetch(lnk, {
              mode: 'no-cors',
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
              console.log("fail 1",error);
              dispatch({
                  type: 'LOAD_POSTS_FAILURE',
                  error: 'Fail 1',
                  isLogging: false
              })
            })
        })
      }).catch((error)=>{
        console.log("fail 2",error.toString());
        dispatch({
            type: 'LOAD_POSTS_FAILURE',
            error: 'Fail 2',
            isLogging: false
        })
      })

  }
}

export default  login
