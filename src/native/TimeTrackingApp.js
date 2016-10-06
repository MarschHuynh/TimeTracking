import React, { Component,PropTypes } from 'react';
import TimeTrackingNavigation from './TimeTrackingNavigation'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import LoginScreen from './login/LoginScreen'

class TimeTrackingApp extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
      if (this.props.loginStatus !== 2){
        return (
          <LoginScreen></LoginScreen>
        )
      }
      else
      return (
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="rgba(0, 0, 0, 0.2)"
            barStyle="light-content"
          />
          <TimeTrackingNavigation/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

var select = (state) =>{
  return {
    loginStatus: state.user.loginStatus
  }
}

TimeTrackingApp = connect(select)(TimeTrackingApp)
export default TimeTrackingApp
