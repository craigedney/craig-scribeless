import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyA97DPX3q4n6Nl3ahxwve6GbKGxWCCX5cY",
    databaseURL: "https://crud-scribeless.firebaseio.com",
    projectId: "crud-scribeless"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;