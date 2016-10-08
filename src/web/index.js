import React,{ Component,PropTypes } from 'react';
import {render} from 'react-dom';
import Home from './home';
import Profile from './profile';
import style from './style.css'
import AppBar from 'react-toolbox/lib/app_bar';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import configureStoreWeb from "./../store/web"
import Navigation from 'react-toolbox/lib/navigation';

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
              <AppBar fixed flat >
                <a href="/home">React Toolbox Docs</a>
                <Navigation />
              </AppBar>
              {this.props.children}
            </div>
        );
    }
}

let store = configureStoreWeb(window.devToolsExtension && window.devToolsExtension())

const AppContainer = () => (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home}/>
          <Route path='profile' component={ Profile }></Route>
        </Route>
      </Router>
  </Provider>
);

render(
  <AppContainer/>,
  document.getElementById('root')
);
