import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LoginScreen extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the LoginScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
