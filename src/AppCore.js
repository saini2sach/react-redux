import React, { Component } from 'react';
import List from './components/listCore';
import store from './store/indexCore';

class AppCore extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }
  render() {
    return (
      <div>
        <h1>Demostration of maintaining state via redux store, a central store to handle all places..!</h1>
        <List amount={store.getState().amount} value={store.getState().value}/>
      </div>
    );
  }
}

export default AppCore;
