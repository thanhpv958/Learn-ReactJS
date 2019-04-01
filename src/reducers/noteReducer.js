import noteConnect from '../firebase/noteConnect';

const noteInitialState = {}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "NOTE_ADD":
            noteConnect.push(action.data);

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
