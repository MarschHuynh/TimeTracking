import React, { Component,PropTypes } from 'react';
import TabView from './tabs/TabView'
import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

export default class TimeTrackingNavigator extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  renderScene = (route, navigator) => {
    // if (route.profile){
    //   return (
    //     <Profile
    //       {...route}
    //       navigator = {navigator}
    //     />
    //   )
    // }
    return <TabView navigator={navigator}></TabView>
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        styles={styles.container}
        configureScene = {(route)=> {
          return Navigator.SceneConfigs.FloatFromBottomAndroid
        }}
        initalRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
