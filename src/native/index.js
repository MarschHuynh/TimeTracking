import React, { Component,PropTypes } from 'react'
import { Provider } from 'react-redux'
import TimeTrackingApp from './TimeTrackingApp'
import configureStoreMobile from "./../store/mobile"
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


let store = configureStoreMobile()

class TimeTracking extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStoreMobile(() => this.setState({isLoading: false}))
    }
  }

  render() {
    if (this.state.isLoading){
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <TimeTrackingApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TimeTracking
