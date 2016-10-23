import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StatusBar
} from 'react-native'

class AppBar extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={styles.container}>
            <StatusBar
              translucent={true}
              backgroundColor='#1976D2'
              barStyle='light-content'
            />
            <View style={styles.appbar}>
              <Icon size={30} name='ios-menu' color='white' style={styles.icon} onPress={this.props.onPress}/>
              <Text style={styles.text}>{this.props.title}</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios:{
        paddingTop: 20,
      },
      android:{
        paddingTop: 24,
      }
    }),
    backgroundColor: '#1976D2',
    elevation: 4,
  },
  appbar: {
    ...Platform.select({
      ios:{
        height: 44,
      },
      android:{
        height: 56,
      }
    }),
    backgroundColor: '#2196F3',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    alignItems:'center',
  },
  icon:{
    top: 1,
    marginLeft:16,
    alignSelf: 'center'
  },
  text: {
    flex: 1,
    ...Platform.select({
      ios:{
        fontSize: 20,
        lineHeight: 22,
        marginLeft: 30,
      },
      android:{
        fontSize: 24,
        marginLeft: 35,
        fontFamily: 'Roboto',
      }
    }),
    color: 'white',
    alignSelf: 'center',
  }
});

export default AppBar;
