import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppCore from './AppCore';
import AppProvider from './AppProvider';
import Notfound from './components/notFound';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-redux app</h1>
        </header>
        <Router>
          <div>
            <ul className="nav-link">
              <li>
                <NavLink to="/" activeClassName="active" exact>Redux Core</NavLink>
              </li>
              <li>
                <NavLink to="/provider" activeClassName="active">Redux With Provider</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={AppCore}/>
              <Route path="/provider" component={AppProvider}/>
              <Route component={Notfound}/>
            </Switch>            
          </div>
        </Router>      
      </div>
    );
  }
}

export default App;