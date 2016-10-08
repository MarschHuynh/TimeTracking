import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
class LoginScreen extends Component {

  onClickLogin = () => {
    this.props.dispatch(login('administrator','admindemo'));
  }

  testApi = () =>{
      fetch("https://tifl.dn.fiisoft.com/obj/").then((data)=>{
        return data.json()
      }).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log('Error get API',error);
      })
  }

  render() {
    return (
      <div style={container}>
        <form action=""
          style={formLogin}>
          <TextField
            ref='username'
            hintText="username"
            floatingLabelText="username"
            underlineStyle={{borderColor: 'white500'}}
            floatingLabelFocusStyle={{fontSize: '1.3em'}}
         /><br />
          <TextField
            ref='password'
            hintText="password"
            type='password'
            floatingLabelText="password"
            underlineStyle={{borderColor: 'white500'}}
            floatingLabelFocusStyle={{fontSize: '1.3em'}}
         /><br />
         <FlatButton
           label="Login"
           primary={true}
           backgroundColor="rgb(0, 188, 212)"
           labelStyle={{color:'white'}}
           onClick={this.onClickLogin}
           style={{float:'right'}}
           ></FlatButton>
         <FlatButton
           label="Test Api"
           primary={true}
           backgroundColor="rgb(0, 188, 212)"
           labelStyle={{color:'white'}}
           onClick={this.testApi}
           style={{float:'right'}}
           ></FlatButton>
      </form>
    </div>
    );
  }
}

const select = (state) =>{
  return {
    user: state.user,
  }
}
LoginScreen = connect(select)(LoginScreen)

export default LoginScreen

var formLogin = {
  marginTop: '10%',
  backgroundColor: 'rgba(184, 184, 184, 0.4)',
  margin: 10,
  padding: 20,
  borderRadius: 2,
  maxWidth: 300,
}

var container = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center'
}
