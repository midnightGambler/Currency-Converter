import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import createStore from './createStore';
import './styles/main.less';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Main className="main" />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
