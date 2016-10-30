import React, { Component,PropTypes } from 'react';
var CookieManager = require('react-native-cookies');
import { login, logout } from 'Actions'
import {connect} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  AppBar,
  Button
} from 'Components'

class TabOne extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static contextTypes = {
    openDrawer: React.PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  onMenuButtonPress = () =>{
    console.log(this.context);
    this.context.openDrawer()
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

  testApi = () =>{
      fetch("https://tifl.dn.fiisoft.com/oauth/~bootstrap/").then((data)=>{
        return data.json()
      }).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log('Error get API',error);
      })
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppBar title="One" onPress={this.onMenuButtonPress}></AppBar>
        <View style={styles.container}>
          <Text>I'm the TabOne component</Text>
          <Button text='Logout' bgColor='rgb(0, 0, 0)' onPressButton={this._logout}/>
          <Button text='Test Api' bgColor='rgb(0, 0, 0)' onPressButton={this.testApi}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
});

TabOne = connect()(TabOne)
export default TabOne
