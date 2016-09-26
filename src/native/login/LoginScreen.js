import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button
} from "Components"

import { login } from 'Actions'

export default class LoginScreen extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  _onPressLoginButton = () => {
    console.log("Login");
    this.props.dispatch(login('administrator','admindemo'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text='Login' bgColor="blue" onPressButton={this._onPressLoginButton}></Button>
        <Text>
          {
            (this.props.user.isLogging)?"Logging ...":"Dont"
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
