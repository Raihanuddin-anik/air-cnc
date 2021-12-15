import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { InfoContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LogIn.css";
import NavBar from '../Home/NavBar/NavBar';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    // function handleSubmit(event) {
    //   event.preventDefault();
    // }



    const auth = getAuth();
    const [NewUser, setNewUser] = useState(false);
    const [user, setuser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    const [loggedInUser, setloggedInUser] = useContext(InfoContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const { email, photoURL, displayName } = res.user;
                const UserSignIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setuser(UserSignIn)
                setloggedInUser(UserSignIn)
                history.replace(from)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(res => {
                const SignOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: '',
                    photo: ''
                }
                setuser(SignOutUser);
                setloggedInUser(SignOutUser)
                

            })
            .catch(err => {

            })
    }
    const handleCheckEmail = (e) => {

        let isFormValid = true;

        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === "password") {
            const isPasswordvalid = e.target.value.length > 6;
            const isPasswordNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordvalid && isPasswordNumber;
        }
        if (isFormValid) {
            const NewUserInfo = { ...user };
            NewUserInfo[e.target.name] = e.target.value;
            setuser(NewUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (NewUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = '';
                    NewUserInfo.success = true;
                    setuser(NewUserInfo);

                    console.log(res)
                })
                .catch(error => {
                    // Handle Errors here.
                    const NewUserInfo = { ...user };
                    NewUserInfo.success = false;
                    NewUserInfo.error = error.message;

                    setuser(NewUserInfo);
                    // ...

                });
        }
        if (!NewUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = '';
                    NewUserInfo.success = true;
                    setuser(NewUserInfo);
                    setloggedInUser(NewUserInfo);
                    history.replace(from)
                    console.log(res)
                })
                .catch(function (error) {
                    // Handle Errors here.
                    const NewUserInfo = { ...user };
                    NewUserInfo.success = false;
                    NewUserInfo.error = error.message;

                    setuser(NewUserInfo);
                    // ...
                });
        }
        e.preventDefault();
    }


    return (
        <div className="App">
            <NavBar user={user}></NavBar>

            {
                loggedInUser.isSignedIn ? <Button className="w-25 mt-5" onClick={handleSingOut}>Sign Out</Button> :
                    <Button className="w-25 mt-5" onClick={handleSignIn}>Sing In with Google PopUP</Button>
            }
            <div className="Login">
                <input type="checkbox" name="NewUser" onClick={() => setNewUser(!NewUser)} id="" />
                <br/>
                <label htmlFor="NewUser">New User Sign up</label>
                <br/>
               
                <Form onSubmit={handleSubmit}>
                
                {NewUser &&   <Form.Group size="lg" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter Your Name"
                            onBlur={handleCheckEmail}
                        />
                    </Form.Group>
                    }
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onBlur={handleCheckEmail}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button className="w-100 mt-2" size="lg" onClick={handleSubmit} type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}> User {NewUser ? "Create" : "logIn"} successfully</p>
                }
            </div>
        </div>
    );
};

export default LogIn;