import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  AppBar
} from "Components"

export default class TabThree extends Component {
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
    this.context.openDrawer()
  }
  render() {
    return (
      <View style={styles.container}>
        <AppBar title="Three" onPress={this.onMenuButtonPress}></AppBar>
        <Text>I'm the TabThree component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
