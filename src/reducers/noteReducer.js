import noteConnect from '../firebase/noteConnect';

const noteInitialState = {
    notes: null,
}

const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "NOTE_STORE":
            noteConnect.push(action.data);

            return state;

        case "EDIT":
            return state

        case "DELETE":
            return state
            
        default:
            return state
    }
};

export default noteReducer;
