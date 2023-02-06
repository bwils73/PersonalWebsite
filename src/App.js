import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp( {
  apiKey: "AIzaSyAZACcI1lhWDNqadKmaDSzu0HPi0RaQHro",
  authDomain: "personal-website-6caf2.firebaseapp.com",
  projectId: "personal-website-6caf2",
  storageBucket: "personal-website-6caf2.appspot.com",
  messagingSenderId: "955752158806",
  appId: "1:955752158806:web:67eea3240ee7a4f1d94df7"
})

//const auth = firebase.auth();
//const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Website In Progress
          </p>
      </header>
    </div>
  );
}

export default App;
