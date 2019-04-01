import firebaseConnect from './firebaseConnect';

var noteConnect = firebaseConnect.database().ref('notes');

export default noteConnect;
