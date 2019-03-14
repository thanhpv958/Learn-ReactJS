var redux = require('redux');

var oldState = {
    product: ['man hinh', 'chuot', 'ban phim'],
    status: true
}

var reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return {...state, status: !state.status};
    
        default:
            return state;
    }
};

var store1 = redux.createStore(reducer1);
store1.subscribe(() => {
    console.log(store1.getState());
});

store1.dispatch({
    type: "CHANGE_STATUS"
});

export default store1;
