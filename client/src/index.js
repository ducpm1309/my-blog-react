import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));  // lưu trữ store chung của app

sagaMiddleware.run(mySaga);

ReactDOM.render(
  // nơi lưu trữ toàn bộ dữ liệu của ứng dụng
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
);
