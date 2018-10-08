import React, { Component } from 'react';
import List from './components/listProvider';
import { Provider } from 'react-redux'; 
import store from './store/indexProvider';


class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <h1>Demostration of maintaining state via redux store - Provider, a central store to handle all places..!</h1>
            <List testProp="hello"/>
        </div>
      </Provider>
    );
  }
}

export default AppProvider;
