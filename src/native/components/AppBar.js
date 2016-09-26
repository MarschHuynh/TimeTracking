import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class AppBar extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.appbar}>
              <Icon size={30} name='ios-menu' color='white' style={styles.icon} onPress={this.props.onPress}/>
              <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  appbar: {
    ...Platform.select({
      ios:{
        marginTop: 20,
        height: 44,
      },
      android:{
        height: 56,
      }
    }),
    flex: 0,
    flexDirection: 'row',
  	backgroundColor: '#387EFFFF',
    justifyContent: 'center',
    padding: 0,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0
    },
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
