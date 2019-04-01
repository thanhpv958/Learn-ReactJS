import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC7hETjNWBYpICbK9447a6oCOYQ7bMcIos",
    authDomain: "reactjs-redux-2e564.firebaseapp.com",
    databaseURL: "https://reactjs-redux-2e564.firebaseio.com",
    projectId: "reactjs-redux-2e564",
    storageBucket: "reactjs-redux-2e564.appspot.com",
    messagingSenderId: "342097282382"
};

var firebaseConnect = firebase.initializeApp(config);

export default firebaseConnect;

// lay du lieu
var data = firebase.database().ref('notes/');
// data.once('value').then(function (snapshot) {
//     console.log(snapshot.val());
// });

// push tu random id
// set phai tu set id
// data.push({
//     'title': 'title',
//     'content': 'content'
// });
