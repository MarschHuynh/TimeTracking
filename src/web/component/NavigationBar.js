import AppBar from 'react-toolbox/lib/app_bar';
import React, { PropTypes } from 'react'
import './NavigationBar.css'
class NavigationBar extends React.Component {
  constructor(){
    super()
    console.log("Navigation constructor");
  }

  componentDidMount() {
    console.log("Conponent did mount");
  }

  render () {
    return (
      <AppBar className="appBar"></AppBar>
    )
  }
}

export default NavigationBar;
