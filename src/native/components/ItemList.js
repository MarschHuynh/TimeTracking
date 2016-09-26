import React, { Component,PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class ItemList extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={styles.row} onPress={this.props.onPress} underlayColor="rgba(196, 196, 196, 0.18)">
        <View style={styles.row}>
          <View style={styles.icon}>
          <Icon size={22} name={this.props.icon} color='white'/>
          </View>
          <Text style={styles.text}>{this.props.text} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 5,
  },
  icon: {
    flex: 0,
    width: 40,
    alignItems:'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: 'white',
  }
});
