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
  TouchableHighlight
} from 'react-native';

import {
  Button
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
    this.state = {
      errorVisible: false
    }
  }

  setErrorVisible(visible) {
    this.setState({errorVisible: visible});
  }

  componentDidMount() {
    this.props.user.isLogging
  }

  _onPressLoginButton = () => {
    this.props.dispatch(login('administrator','admindemo'));
  }

  _isLogining = () =>{
    if (this.props.user.loginStatus === 1)
      return (
        <View style={styles.loaderContainer}>
          <Pulse size={20} color="red" />
          <Text style={styles.text}>login</Text>
        </View>
      )
  }

  _errorMessage = () =>{
    if (this.props.user.error !== null && this.props.user.error !== undefined)
        return (
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={true}
            >
           <View  style={styles.errorContainer}>
            <View style={styles.error}>
              <Text style={{alignSelf: 'center', fontSize:20}}>Error</Text>
              <Text style={{alignSelf: 'center', fontSize:14, margin: 5}}>{this.props.user.error}</Text>
              <Button text='Ok' textColor='black' bgColor='rgba(0, 0, 0, 0.1)' onPressButton={() => {
                this.props.dispatch(resetError())
              }}/>
            </View>
           </View>
          </Modal>
        )
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
        {this._isLogining()}
        {this._errorMessage()}
        <View style={styles.loginContainer}>
          <Text style={styles.logo}>Time Tracking</Text>
          <TextInput
            placeholderTextColor='rgb(150, 150, 150)'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref='username'
            onChangeText={(text) => this.setState({username:text})}
            style={styles.input}
            placeholder='username'/>
          <TextInput
            placeholderTextColor='rgb(150, 150, 150)'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref='password'
            onChangeText={(text) => this.setState({password:text})}
            style={styles.input}
            placeholder='password'/>
          <View style={styles.btnGroup}>
            <Button text='Login' bgColor='rgb(0, 0, 0)' onPressButton={this._onPressLoginButton}/>
            <Button text='Logout' bgColor='rgb(0, 0, 0)' onPressButton={this._logout}/>
            <Button text='Test Api' bgColor='rgb(0, 0, 0)' onPressButton={this.testApi}/>
          </View>
        </View>
        <View style={styles.social}>
          <Button text='Facebook' bgColor='#3b5998' onPressButton={this._onPressButtonFacebook}></Button>
          <Button text='Google' bgColor='rgb(222, 72, 72)' ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    // padding:5,
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#33A9E2',
  },
  input: {
    flex: 0,
    fontSize: 16,
    height: 40,
    margin: 5,
    borderRadius: 2,
    backgroundColor: 'rgb(240, 235, 235)',
    // placeholderColor: 'white',
    paddingLeft: 5,
    alignItems: 'center',
    color: 'rgb(87, 87, 87)'
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
  },
  social:{
    flex:0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 5,
    zIndex: -1,
  },
  btn:{
    flex:1,
    backgroundColor:'white',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 5,
  },
  loaderContainer:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: window.height,
    backgroundColor: 'rgba(78, 78, 78, 0.8)',
    zIndex: 100,
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
