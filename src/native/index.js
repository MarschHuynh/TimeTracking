import React, { Component,PropTypes } from 'react'
import { Provider } from 'react-redux'
import TabView from './tabs/TabView'
import configureStoreMobile from "./../store/mobile"
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';



let store = configureStoreMobile(window.devToolsExtension && window.devToolsExtension())

class TimeTracking extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <TabView/>
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
