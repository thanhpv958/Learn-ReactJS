import allReducer from '../reducers/allReducer';

var redux = require('redux');

var store = redux.createStore(allReducer);

export default store;
