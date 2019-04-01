import noteReducer from './noteReducer';

var redux = require('redux');

const allReducer = redux.combineReducers({
    noteReducer: noteReducer,
});

export default allReducer;
