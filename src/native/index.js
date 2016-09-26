import React, { Component,PropTypes } from 'react'
import { Provider } from 'react-redux'
import TabView from './tabs/TabView'
import configureStoreFhub from "./../store"
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';



let store = configureStoreFhub(window.devToolsExtension && window.devToolsExtension())

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