import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer1 from './reducers/reducer1'
import 'bootstrap/dist/css/bootstrap.css'

const store1 = createStore(Reducer1)

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store1}>
    <App />
    </Provider>
  //</React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
