import React,{ Component,PropTypes } from 'react';
import {render} from 'react-dom';
import Home from './home';
import Profile from './profile';
import style from './style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import configureStoreWeb from "./../store/web"


import LoginScreen from './login';

// Fix warning.js?8a56:36Warning: Unknown prop `onTouchTap` on <button> tag. Remove this prop from the element.
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class MainLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
              <AppBar title='Time Tracking'>
                <Link to="login">Login</Link>
              </AppBar>

              {this.props.children}
            </div>
        );
    }
}

let store = configureStoreWeb(window.devToolsExtension && window.devToolsExtension())

const AppContainer = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home}/>
          <Route path='login' component={ LoginScreen }></Route>
          <Route path='profile' component={ Profile }></Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

render(
  <AppContainer/>,
  document.getElementById('root')
);
