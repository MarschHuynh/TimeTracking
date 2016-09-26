import { connect } from 'react-redux'
import { login } from 'Actions'
import LoginScreen from './../../native/login/LoginScreen'



const select = (state) =>{
  return {
    user: state.user,
    login: login
  }
}

const LoginScreenContainer = connect(select)(LoginScreen)

export default LoginScreenContainer
