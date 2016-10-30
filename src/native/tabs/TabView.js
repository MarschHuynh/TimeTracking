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

import TimeLine from './timeline'
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

  static childContextTypes = {
    openDrawer: React.PropTypes.func
  }

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
    }
  }

  openDrawer = () =>{
    this.refs.drawer.openDrawer()
  }

  _onTabSelect = (tab) => {
    const { onTabSelect } = this.props
    onTabSelect(tab)
    this.refs.drawer.closeDrawer();
  }

  navigationView() {
      return (
        <View style={styles.drawContainer}>
          <View style={styles.topDraw}>
            <Text style={{color:'white'}}>{this.props.user.username}</Text>
            <Text style={{color:'white'}}>{this.props.user.email}</Text>
          </View>
          <View style={styles.contentDraw}>
            {
              drawContent.map(({text,icon})=>{
                return <ItemList key={text} text={text} icon={icon} onPress={()=>this._onTabSelect(text)}></ItemList>
              })
            }
          </View>
        </View>
      )
  }

  renderView = () => {
    switch(this.props.tab){
      case 'TimeLine':
        return <TimeLine />
      case 'TabTwo':
        return <TabTwo />
      case 'TabThree':
        return <TabThree />
      default:
        return <TimeLine />
    }
  }

  render() {
    return (
      <DrawLayout
        ref='drawer'
        drawerWidth={window.width-56*2}
        drawerPosition={DrawLayout.positions.Left}
        renderNavigationView={this.navigationView.bind(this)}>
        <View style={styles.content}>
          {this.renderView()}
        </View>
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

var actions = (dispatch) =>{
  return {
    onTabSelect: (tab) =>dispatch(switchTab(tab))
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
  },
  content:{
    flex:1
  }
});

TabView = connect(select,actions)(TabView)

export default  TabView
