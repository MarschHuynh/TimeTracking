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

class TabOneC extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  onMenuButtonPress = () =>{
    this.props.drawLayout.openDrawer()
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
      <View style={styles.container}>
        <AppBar title="One" onPress={this.onMenuButtonPress}></AppBar>
        <Text>I'm the TabOne component</Text>
        <Button text='Logout' bgColor='rgb(0, 0, 0)' onPressButton={this._logout}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

var TabOne = connect()(TabOneC)
export default TabOne
