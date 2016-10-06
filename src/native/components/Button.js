import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var that = {}
export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    that = this
  }

  _styleButton = {
      flex:1,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: this.props.bgColor,
      elevation: 2,
      borderRadius: 5,
      margin: 5,
      justifyContent:'center',
      maxHeight:35,
  }

  _styleText = {
    color: this.props.textColor ? this.props.textColor : 'white',
    alignSelf: 'center',
  }

  render() {
    return (
      <TouchableHighlight style={this._styleButton} onPress={this.props.onPressButton} underlayColor={this.props.underlayColor ? this.props.underlayColor : 'rgba(154, 154, 154, 0.8)'}>
        <Text style={this._styleText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
