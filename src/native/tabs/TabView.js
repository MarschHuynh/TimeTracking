import React, { Component,PropTypes } from 'react'
import DrawLayout from 'react-native-drawer-layout'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {
  ItemList
} from "Components"

import {
  switchTab
} from "Actions"

import LoginScreen from './../login/LoginScreen'

import TabOne from './tabOne'
import TabTwo from './tabTwo'
import TabThree from './tabThree'

const window = Dimensions.get('window')
const goldRatio = window.height*0.39
import {
  drawContent
} from './constant'

class TabView extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      drawLayout: null
    }
  }

  componentDidMount() {
    console.log(this.refs);
    this.setState({drawLayout: this.refs.drawer})
  }

  _onItemPress = (text) => {
    const { dispatch } = this.props
    dispatch(switchTab(text));
    this.refs.drawer.closeDrawer();
  }

  render() {
    var renderNavigationList = (
      drawContent.map(({text,icon})=>{
        return <ItemList key={text} text={text} icon={icon} onPress={()=>this._onItemPress(text)}></ItemList>
      })
    )

    var navigationView = (
      <View style={styles.drawContainer}>
        <View style={styles.topDraw}>
          <Text style={{color:'white'}}>{this.props.user.username}</Text>
          <Text style={{color:'white'}}>{this.props.user.email}</Text>
        </View>
        <View style={styles.contentDraw}>
          {renderNavigationList}
        </View>
      </View>
    )

    var renderView = () => {
      switch(this.props.tab){
        case 'TabOne':
          return <TabOne drawLayout={this.state.drawLayout}/>
        case 'TabTwo':
          return <TabTwo drawLayout={this.state.drawLayout}/>
        case 'TabThree':
          return <TabThree drawLayout={this.state.drawLayout}/>
        default:
          return <TabOne drawLayout={this.state.drawLayout}/>
      }
    }

    if (!this.props.user.isLogedIn){
      return (
        <LoginScreen></LoginScreen>
      )
    }

    else
      return (
        <DrawLayout
          ref='drawer'
          drawerWidth={window.width-56*2}
          drawerPosition={DrawLayout.positions.Left}
          renderNavigationView={() => navigationView}>
          {renderView()}
        </DrawLayout>
      );
  }
}

var select = (state) =>{
  return {
    tab: state.navigation.tab,
    user: state.user
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
  },
  drawContainer: {
    flex: 1,
    backgroundColor: 'rgb(44,50,83)',
    ...Platform.select({
      ios:{
        marginTop: 20,
      },
      android:{
      }
    }),
  },
  topDraw:{
    flex:0,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentDraw:{
    flex:0,
  },
  pageView: {
    flex: 1,
    backgroundColor: 'red'
  },
  welcome:{
    fontSize: 30,
    top: goldRatio,
  }
});

TabView = connect(select)(TabView)

export default  TabView
