import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
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
      backgroundColor: this.props.bgColor,
      elevation: this.props.elevation?this.props.elevation:2,
      borderRadius: this.props.borderRadius!=null?this.props.borderRadius:3,
      justifyContent:'center',
      maxHeight:50,
  }

  _styleText = {
    color: this.props.textColor ? this.props.textColor : 'white',
    alignSelf: 'center',
  }

  render() {
    return (
      <TouchableOpacity style={this._styleButton} onPress={this.props.onPressButton} underlayColor={this.props.underlayColor ? this.props.underlayColor : 'rgba(154, 154, 154, 0.8)'}>
        <Text style={this._styleText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
