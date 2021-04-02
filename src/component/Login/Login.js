import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        isSignedIn: false,
        email: '',
        password: '',
        photo: '',
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);
                console.log(displayName, email, photoURL);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    name: '',
                    isSignedIn: false,
                    email: '',
                    password: '',
                    photo: '',
                    error: '',
                    success: false,
                }
                setUser(signedOutUser)
            })
            .catch(err => {

            })
    }

    return (
        <div>
            {
                user.name ? <Button onClick={handleSignOut} variant="primary">Sign out</Button> :
                    <Button onClick={handleSignIn} variant="primary">Sign in</Button>
            }
            
        </div>
    );
};

export default Login;