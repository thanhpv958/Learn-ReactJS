const noteInitialState = {
    'note': {
        'title': 'ABC',
        'content': 'ASFSDFSDFDF'
    }
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "NOTE_ADD":
            console.log('note add');
            return state;
        case "EDIT":
            return state

        case "DELETE":
            return state
            
        default:
            return state
    }
}

export default noteReducer;
