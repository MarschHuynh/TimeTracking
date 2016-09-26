import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <AppBar
          title="Time Tracking">

        </AppBar>
        <div className='welcome'>
          <h1 className='title'>Marsch Huynh from Da Nang</h1>
        </div>
      </div>
    );
  }
}
