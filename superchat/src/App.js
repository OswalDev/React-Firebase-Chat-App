
import React, { useRef, useState } from 'react';
import './App.css';

//using compat version for compatibility issues v9 to v10
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC6EVJMsmwX7h8biJhXHdO2jfRjKqur19I",
  authDomain: "react-chat-app-d961d.firebaseapp.com",
  projectId: "react-chat-app-d961d",
  storageBucket: "react-chat-app-d961d.appspot.com",
  messagingSenderId: "277590300769",
  appId: "1:277590300769:web:0ea356c0a62ac238467220"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {user ? <SignIn /> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signWithPopup(provider);
  }
  return(
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
