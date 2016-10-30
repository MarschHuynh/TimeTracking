import React, { Component,PropTypes } from 'react';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {connect} from 'react-redux'
var CookieManager = require('react-native-cookies');

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
  TouchableHighlight,
  StatusBar,
  Alert
} from 'react-native';

import {
  Button,

} from "Components"

import { login, logout, resetError } from 'Actions'

const window = Dimensions.get('window');
const goldRatio = window.height*0.39

class LoginScreen extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.user.isLogging
  }

  _onPressLoginButton = () => {
    setTimeout(()=>{
      this.props.dispatch({
          type: 'LOG_IN_SUCCESS',
          username:"Demo",
          sessionid: "test",
          loginStatus: 0,
      })
    })
    // this.props.dispatch(login('administrator','admindemo'));
  }

  _isLogining = () =>{
    if (this.props.user.isLoggingIn === 1)
      return (
        <View style={styles.loaderContainer}>
          <Pulse size={20} color="red" />
          <Text style={styles.text}>login</Text>
        </View>
      )
  }

  _errorMessage = () =>{
    if (this.props.user.error !== null && this.props.user.error !== undefined){
      Alert.alert("Error",this.props.user.error,[{text:"OK",onPress:() => this.props.dispatch(resetError())}])
    }
  }

  testApi = () =>{
      fetch("https://tifl.dn.fiisoft.com/obj/~bootstrap").then((data)=>{
        return data.json()
      }).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log('Error get API',error);
      })
  }

  _logout = () =>{
    this.props.dispatch(logout());
    CookieManager.clearAll((err, res) => {
      if (err){
        console.log(err);
      } else {
        console.log('Clear Finish',res);
      }
    });
  }

  render() {
    return (
      <View style={styles.screen}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.9)"
          barStyle="light-content"
        />
        {this._isLogining()}
        {this._errorMessage()}
        <View style={styles.loginContainer}>
          <Text style={styles.logo}>Time Tracking</Text>
          <TextInput
            placeholderTextColor='rgb(214, 214, 214)'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref='username'
            onChangeText={(text) => this.setState({username:text})}
            style={styles.input}
            placeholder='username'/>
          <TextInput
            placeholderTextColor='rgb(214, 214, 214)'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref='password'
            onChangeText={(text) => this.setState({password:text})}
            style={styles.input}
            placeholder='password'/>
          <View style={styles.btnGroup}>
            <Button text='Login' borderRadius={0} bgColor='rgb(96, 74, 204)' onPressButton={this._onPressLoginButton}/>
          </View>
        </View>
        <View style={styles.social}>
          <Button text='Facebook' borderRadius={0} bgColor='#3b5998' onPressButton={this._onPressButtonFacebook}></Button>
          <Button text='Google' borderRadius={0} bgColor='rgb(222, 72, 72)' ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#33A9E2',
    padding: 16
  },
  input: {
    flex: 0,
    fontSize: 16,
    height: 40,
    margin: 16,
    marginBottom: 8,
    marginTop:0,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 5,
    alignItems: 'center',
    color: 'white',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  logo:{
    marginTop: goldRatio*0.5,
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: goldRatio*0.5,
  },
  inputWrap:{
    padding: 5,
    flex: 0,
    backgroundColor: 'rgb(89, 175, 207)',
  },
  loginContainer:{
    flex:1,
    zIndex: -1,
  },
  btnGroup:{
    zIndex: -1,
    marginHorizontal: 16,
  },
  social:{
    flex:0,
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 5,
    zIndex: -1,
  },
  button:{
    marginBottom: 8
  },
  loaderContainer:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: window.height,
    backgroundColor: 'rgba(78, 78, 78, 0.8)',
    zIndex: -100,
  },
  errorContainer:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: window.height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
  text:{
    fontSize: 20,
    color: 'white',
  },
  error: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    width: window.width-56,
    borderRadius: 10,
  }
});

const select = (state) =>{
  return {
    user: state.user,
  }
}
LoginScreen = connect(select)(LoginScreen)
export default LoginScreen
