import React, { Component,PropTypes } from 'react';
var CookieManager = require('react-native-cookies');
import { login, logout } from 'Actions'
import {connect} from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import {
  AppBar,
  Button
} from 'Components'

class TimeLine extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static contextTypes = {
    openDrawer: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource : ds.cloneWithRows([
        {"id":1,title:"First",time:"12:10",content:"This is a first timeline item"},
        {"id":2,title:"Second",time:"13:10",content:"This is a second timeline item"},
        {"id":3,title:"third",time:"14:10",content:"This is a third timeline item"},
      ])
    }

    console.log(this.props.state);
  }

  onMenuButtonPress = () =>{
    console.log(this.context);
    this.context.openDrawer()
  }

  _logout = () =>{
    this.props.dispatch(logout());
    CookieManager.clearAll((err, res) => {
      if (err){
        console.log(err);
      } else {
        console.log('Clear Finish',res);
      }
    });
  }

  testApi = () =>{
      fetch("https://tifl.dn.fiisoft.com/oauth/~bootstrap/").then((data)=>{
        return data.json()
      }).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log('Error get API',error);
      })
  }

  renderRow = (data) =>{
    return (
      <Text>{data.content}</Text>
    )
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppBar title="TimeLine" onPress={this.onMenuButtonPress}></AppBar>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,backgroundColor: '#f3f3f3'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const select = (state) =>{
  return {
    timeline : state.timeline,
    state: state
  }
}

TimeLine = connect(select)(TimeLine)
export default TimeLine
